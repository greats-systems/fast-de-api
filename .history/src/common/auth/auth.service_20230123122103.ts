import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Client } from 'src/client/entities/client.entity';
import { ClientService } from 'src/client/client.service';
import { DriverService } from 'src/driver/driver.service';
import { Driver } from 'src/driver/entities/driver.entity';
import { CreateMobileUserDTO } from 'src/users/dto/create-user.input';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<User>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly clientService: ClientService,
    private readonly driverService: DriverService,
    private jwtTokenService: JwtService,
  ) {}

  async create(createMobileUserDTO: CreateMobileUserDTO) {
    const saltOrRounds = 10;
    const pin = createMobileUserDTO.pin;
    createMobileUserDTO.pin = await bcrypt.hash(pin, saltOrRounds);

    const clientSchema = this.clientRepository.create(createMobileUserDTO);
    console.log('clientSchema ------');
    console.log(clientSchema);
    const client = await this.clientRepository.save(clientSchema);
    console.log('new client')
    console.log(client)

    let loginData = {
      phone:createMobileUserDTO.phone,
      pin:pin,
    }
    console.log('newLogin')
    var newLogin = await this.loginClientPhone(loginData)
    console.log(newLogin)
    
    let response = {
      client,
      newLogin,
    }
    return response;
  }

  async loginClientPhone(loginUserInput: LoginUserInput) {
    console.log('logging user data')
    console.log(loginUserInput.phone)
    console.log(loginUserInput.pin)
    const user = await this.authService.validateClient(
      loginUserInput.phone,
      loginUserInput.pin,
    );
    console.log('valid Client ')
    console.log(user)

    if (!user) {
      console.log('Phone or password are invalid')
      throw new BadRequestException(`Phone or password are invalid`);
    } else {
      let loggedClient = await this.authService.generateClientCredentials(user)
      console.log('loggedClient')
      console.log(loggedClient)
      return loggedClient;
    }
  }

  async validateUser(phone: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(phone);
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async verifyUser(driverId: string, otp: string): Promise<any> {
    const user = await this.usersService.findOneByPhone(driverId);
    if (user) {
      if (await bcrypt.compare(otp, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async decodeUserToken(token: string): Promise<any> {
    const user = this.jwtTokenService.decode(token);
    if (user) {
      return user;
    }

    return null;
  }

  async generateUserCredentials(user: User) {
    const payload = {
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      sub: user.userId,
    };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
