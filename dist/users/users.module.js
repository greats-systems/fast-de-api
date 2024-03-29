"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const common_module_1 = require("../common/common.module");
const auth_module_1 = require("../common/auth.module");
const users_controller_1 = require("./users.controller");
const gateway_connected_user_entity_1 = require("./entities/gateway.connected.user.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, gateway_connected_user_entity_1.GatewayConnectedUser]),
        ],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService, typeorm_1.TypeOrmModule],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map