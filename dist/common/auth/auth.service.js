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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../../users/users.service");
const Repository_1 = require("typeorm/repository/Repository");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
let AuthService = class AuthService {
    constructor(userRepository, usersService, jwtTokenService) {
        this.userRepository = userRepository;
        this.usersService = usersService;
        this.jwtTokenService = jwtTokenService;
    }
    async saveDriverApkLink(link) {
        return 'response';
    }
    async create(createMobileUserDTO) {
        const saltOrRounds = 10;
        const pin = createMobileUserDTO.pin;
        createMobileUserDTO.pin = await bcrypt.hash(pin, saltOrRounds);
        const userSchema = this.userRepository.create(createMobileUserDTO);
        console.log('userSchema ------');
        console.log(userSchema);
        const user = await this.userRepository.save(userSchema);
        console.log('new user');
        console.log(user);
        let loginData = {
            phone: createMobileUserDTO.phone,
            pin: pin,
            app: createMobileUserDTO.app
        };
        console.log('newLogin');
        var newLogin = await this.loginUserPhone(loginData);
        console.log(newLogin);
        let response = {
            user,
            newLogin,
        };
        return response;
    }
    async register(createUserDTO) {
        const saltOrRounds = 10;
        const password = createUserDTO.password;
        createUserDTO.password = await bcrypt.hash(password, saltOrRounds);
        const userSchema = this.userRepository.create(createUserDTO);
        const user = await this.userRepository.save(userSchema);
        return user;
    }
    async loginUser(loginUserInput) {
        console.log('loginUserInput');
        console.log(loginUserInput);
        const user = await this.validateUser(loginUserInput.email, loginUserInput.password);
        if (!user) {
            console.log('Phone or password are invalid');
            let response = {
                status: 405,
                data: null,
                err: 'Phone or password are invalid'
            };
            return response;
        }
        else if (user) {
            let loggedUser = await this.generateUserCredentials(user);
            let response = {
                status: 201,
                data: { token: loggedUser,
                    user: user },
                err: null
            };
            return response;
        }
    }
    async loginUserPhone(loginUserInput) {
        const user = await this.validateMobileUser(loginUserInput.phone, loginUserInput.pin);
        if (!user) {
            console.log('Phone or password are invalid');
            let response = {
                status: 405,
                data: null,
                err: 'Phone or password are invalid'
            };
            return response;
        }
        else if (user && user.role == loginUserInput.app) {
            let loggedUser = await this.generateUserCredentials(user);
            let response = {
                status: 201,
                data: loggedUser,
                err: null
            };
            return response;
        }
        else if (user && user.role != loginUserInput.app) {
            let response = {
                status: 201,
                data: null,
                err: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} 0${user.phone} not ${loginUserInput.app},Register as ${loginUserInput.app.charAt(0).toUpperCase() + loginUserInput.app.slice(1)} or   Download Fast-De ${user.role.charAt(0).toUpperCase() + user.role.slice(1)} App `
            };
            return response;
        }
    }
    async validateMobileUser(phone, pin) {
        console.log('getting User by phone');
        console.log(phone);
        const user = await this.usersService.findOneByPhone(phone);
        console.log(user);
        if (user) {
            console.log('User found');
            console.log(user);
            if (await bcrypt.compare(pin, user.pin)) {
                delete user.pin;
                return user;
            }
        }
        else {
            console.log('User not found');
        }
        return null;
    }
    async validateUser(email, password) {
        console.log('getting User');
        console.log(email);
        const user = await this.usersService.findOneByEmail(email);
        console.log(user);
        if (user) {
            console.log('User found');
            console.log(user);
            if (await bcrypt.compare(password, user.password)) {
                delete user.password;
                return user;
            }
        }
        else {
            console.log('User not found');
            return null;
        }
        return null;
    }
    async decodeUserToken(token) {
        const user = this.jwtTokenService.decode(token);
        if (user) {
            return user;
        }
        return null;
    }
    async generateUserCredentials(user) {
        const payload = {
            phone: user.phone,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            sub: user.userId,
            userId: user.userId,
        };
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [Repository_1.Repository,
        users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map