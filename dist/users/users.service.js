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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../common/auth/auth.service");
let UsersService = class UsersService {
    constructor(userRepository, authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }
    async create(createUserDTO) {
        const saltOrRounds = 10;
        const password = createUserDTO.pin;
        createUserDTO.pin = await bcrypt.hash(password, saltOrRounds);
        const userSchema = this.userRepository.create(createUserDTO);
        const user = await this.userRepository.save(userSchema);
        console.log(user);
        return user;
    }
    async loginUser(loginUserDTO) {
        const user = await this.authService.validateUser(loginUserDTO.phone, loginUserDTO.password);
        if (!user) {
            throw new common_1.BadRequestException(`phone or password are invalid`);
        }
        else {
            return this.authService.generateUserCredentials(user);
        }
    }
    async loginMobileUser(loginUserDTO) {
        const user = await this.authService.validateUser(loginUserDTO.phone, loginUserDTO.pin);
        if (!user) {
            throw new common_1.BadRequestException(`Phone or password are invalid`);
        }
        else {
            return this.authService.generateUserCredentials(user);
        }
    }
    async getAllClients() {
        let clients = await this.userRepository.find({ where: { role: 'client' } });
        if (!clients) {
            throw new common_1.NotFoundException(`Clients not found`);
        }
        else {
            console.log('clients');
            console.log(clients);
        }
        return clients;
    }
    async getDrivers(userIds) {
        console.log('userIds');
        console.log(userIds.length);
        let users;
        if (userIds.length < 1) {
            users = await this.userRepository
                .createQueryBuilder("user")
                .where("user.role = 'driver' AND user.userId NOT IN (:...userIds)", { userIds: userIds })
                .getMany();
        }
        else
            (users = await this.userRepository.find({ where: { role: 'driver' } }));
        if (!users) {
            throw new common_1.NotFoundException(`Drivers not found`);
        }
        return users;
    }
    async getAllDrivers() {
        let users = await this.userRepository.find({ where: { role: 'driver' } });
        if (!users) {
            throw new common_1.NotFoundException(`Drivers not found`);
        }
        else {
            console.log(users);
        }
        return users;
    }
    async getAllUsers() {
        let users = await this.userRepository.find({ where: { role: 'admin' } });
        if (!users) {
            throw new common_1.NotFoundException(`Users not found`);
        }
        else {
            console.log(users);
        }
        return users;
    }
    async update(userId, updateUserInput) {
        const user = await this.userRepository.preload(Object.assign({ userId: userId }, updateUserInput));
        if (!user) {
            throw new common_1.NotFoundException(`User #${userId} not found`);
        }
        return this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async getUserByID(userId) {
        console.log('getUserByID userId');
        console.log(userId);
        const user = await this.userRepository.findOne({
            where: { userId: userId },
        });
        console.log('getUserByID user');
        console.log(user);
        if (user) {
            delete user.pin;
            delete user.password;
            return user;
        }
        return null;
    }
    async findOne(userId) {
        const user = await this.userRepository.findOne({
            where: { userId: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User #${userId} not found`);
        }
        return user;
    }
    async getUserProfile(token) {
        const decodedser = await this.authService.decodeUserToken(token);
        let user;
        if (decodedser) {
            user = await this.userRepository.findOne({
                where: { userId: decodedser.sub },
            });
            console.log('getUserProfile');
            console.log(decodedser.sub);
        }
        else {
            throw new common_1.NotFoundException(`User token #${token} not valid`);
        }
        if (!user) {
            throw new common_1.NotFoundException(`User #${decodedser.sub} not found`);
        }
        return user;
    }
    async findOneByPhone(phone) {
        const user = await this.userRepository.findOne({ where: { phone: phone } });
        if (!user || user === null) {
            throw new common_1.NotFoundException(`User #${phone} not found`);
        }
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (!user || user === null) {
            throw new common_1.NotFoundException(`User with ${email} not found`);
        }
        return user;
    }
    async remove(userId) {
        const user = await this.getUserByID(userId);
        await this.userRepository.remove(user);
        return {
            userId: userId,
            firstName: '',
            lastName: '',
            phone: '',
            password: '',
            email: '',
            pin: '',
            role: '',
            rides: [],
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map