"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_service_1 = require("./common/auth/auth.service");
const dotenv = require("dotenv");
const common_module_1 = require("./common/common.module");
const jwt_1 = require("@nestjs/jwt");
const ride_module_1 = require("./ride/ride.module");
const notifications_module_1 = require("./notifications/notifications.module");
const client_module_1 = require("./client/client.module");
const client_service_1 = require("./client/client.service");
const parcels_module_1 = require("./parcels/parcels.module");
const parcels_service_1 = require("./parcels/parcels.service");
const driver_module_1 = require("./driver/driver.module");
const driver_service_1 = require("./driver/driver.service");
const auth_module_1 = require("./common/auth.module");
const chat_gateway_1 = require("./chat/chat.gateway");
const sockets_gateway_1 = require("./sockets/sockets.gateway");
const users_service_1 = require("./users/users.service");
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, users_module_1.UsersModule, ride_module_1.RideModule, notifications_module_1.NotificationsModule, client_module_1.ClientModule, driver_module_1.DriverModule, parcels_module_1.ParcelsModule, auth_module_1.AuthModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, jwt_1.JwtService, client_service_1.ClientService, driver_service_1.DriverService, auth_service_1.AuthService, parcels_service_1.ParcelsService, chat_gateway_1.ChatGateway, sockets_gateway_1.SocketsGateway, users_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map