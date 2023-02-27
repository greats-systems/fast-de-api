"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_user_input_1 = require("../../users/dto/create-user.input");
const login_user_input_1 = require("../../users/dto/login-user.input");
const auth_service_1 = require("./auth.service");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerByPhone(createMobileUserDTO) {
        return this.authService.create(createMobileUserDTO);
    }
    LoginByPhone(loginMobileUserDTO) {
        return this.authService.loginUserPhone(loginMobileUserDTO);
    }
    register(createUserDTO) {
        return this.authService.register(createUserDTO);
    }
    Login(loginUserDTO) {
        return this.authService.loginUser(loginUserDTO);
    }
    GetUserByToken(access_token) {
        return this.authService.decodeUserToken(access_token.access_token);
    }
};
__decorate([
    (0, common_1.Post)('registerByPhone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateMobileUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerByPhone", null);
__decorate([
    (0, common_1.Post)('loginByPhone'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_input_1.LoginMobileUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "LoginByPhone", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_input_1.LoginUserDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('getUserByToken'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "GetUserByToken", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map