"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatedSocketAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const users_service_1 = require("../users/users.service");
class AuthenticatedSocketAdapter extends platform_socket_io_1.IoAdapter {
    constructor(app) {
        super(app);
        this.app = app;
        this.usersService = this.app.get(users_service_1.UsersService);
    }
    createIOServer(port, options) {
        const server = super.createIOServer(port, options);
        server.use(async (socket, next) => {
            var _a, _b;
            const tokenPayload = (_b = (_a = socket.handshake) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.token;
            if (!tokenPayload) {
                return next(new Error('Token not provided'));
            }
            const [method, token] = tokenPayload.split(' ');
            if (method !== 'Bearer') {
                return next(new Error('Invalid authentication method. Only Bearer is supported.'));
            }
            try {
                let gatewayConnectedUser;
                socket.user = {};
                const user = await this.usersService.getUserProfile(token);
                gatewayConnectedUser = await this.usersService.getGatewayConnectedUser(user.userId);
                console.log('loged gatewayConnectedUser', gatewayConnectedUser);
                if (!gatewayConnectedUser) {
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
                return next();
            }
            catch (error) {
                return next(new Error('Authentication error'));
            }
        });
        return server;
    }
}
exports.AuthenticatedSocketAdapter = AuthenticatedSocketAdapter;
//# sourceMappingURL=authenticated-socket.adapter.js.map