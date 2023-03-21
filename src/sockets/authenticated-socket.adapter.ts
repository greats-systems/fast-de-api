import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server } from 'socket.io';
import { UsersService } from 'src/users/users.service';

export class AuthenticatedSocketAdapter extends IoAdapter {
  // private readonly authService:AuthService;
  private readonly usersService: UsersService

  constructor(
    private app: INestApplicationContext,

    ) {
    super(app);
    // this.authService = this.app.get(AuthService);
    this.usersService = this.app.get(UsersService);
  }

  createIOServer(port: number, options?: any) {
    const server: Server = super.createIOServer(port, options);

    server.use(async (socket: any, next) => {
      const tokenPayload: string = socket.handshake?.auth?.token;
    //   console.log(tokenPayload)

      if (!tokenPayload) {
        return next(new Error('Token not provided'));
      }

      const [method, token] = tokenPayload.split(' ');
      if (method !== 'Bearer') {
        return next(
          new Error('Invalid authentication method. Only Bearer is supported.'),
        );
      }

      try {
        let  gatewayConnectedUser;
        socket.user = {};
        // console.log('create user', token)

        const user = await this.usersService.getUserProfile(token);
        
        gatewayConnectedUser =  await this.usersService.getGatewayConnectedUser(user.userId, )
        console.log('loged gatewayConnectedUser', gatewayConnectedUser)
        
        if(!gatewayConnectedUser){
            gatewayConnectedUser = await this.usersService.createGatewayConnectedUser({
                userId: user.userId,
                deviceId: user.phone,
                currentSocketID: socket.id,
                location: JSON.stringify({
                    longitude: 0,
                    latitude: 0
                }),
                role: user.role,
                issuedTime: new Date().toLocaleString(),
            });
        }
        socket.user = gatewayConnectedUser;
        // console.log(socket)
        return next();
      } catch (error: any) {
        return next(new Error('Authentication error'));
      }
    });
    return server;
  }
}
