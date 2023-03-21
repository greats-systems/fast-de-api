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
const gateway_connected_user_entity_1 = require("./entities/gateway.connected.user.entity");
let UsersService = class UsersService {
    constructor(userRepository, gatewayConnectedUserRepository, authService) {
        this.userRepository = userRepository;
        this.gatewayConnectedUserRepository = gatewayConnectedUserRepository;
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
    async createGatewayConnectedUser(gatewayConnectedUserDTO) {
        const pointObject_orderDriverCoordinates = {
            type: "Point",
            coordinates: [JSON.parse(gatewayConnectedUserDTO.location).longitude, JSON.parse(gatewayConnectedUserDTO.location).latitude]
        };
        gatewayConnectedUserDTO.location = pointObject_orderDriverCoordinates;
        const userSchema = this.gatewayConnectedUserRepository.create(gatewayConnectedUserDTO);
        console.log('create gatewayConnectedUser', userSchema);
        try {
            const gatewayConnectedUser = await this.gatewayConnectedUserRepository.save(userSchema);
            return gatewayConnectedUser;
        }
        catch (error) {
            console.log(error);
        }
    }
    async update(userId, updateUserInput) {
        const user = await this.userRepository.preload(Object.assign({ userId: userId }, updateUserInput));
        if (!user) {
            throw new common_1.NotFoundException(`User #${userId} not found`);
        }
        return this.userRepository.save(user);
    }
    async getGatewayConnectedUser(userId) {
        const user = await this.gatewayConnectedUserRepository.findOne({
            where: { userId: userId },
        });
        if (!user) {
            let foundIdentity = await this.gatewayConnectedUserRepository.findOne({
                where: { userId: userId },
            });
            console.log('foundIdentity');
            console.log(foundIdentity);
            return null;
        }
        return user;
    }
    async updateGatewayConnectedUserLocation(userLocation) {
        const user = await this.getGatewayConnectedUser(userLocation.userId);
        const pointObject_location = {
            type: "Point",
            coordinates: [userLocation.longitude, userLocation.latitude]
        };
        user.location = pointObject_location;
        const gatewayConnectedUser = await this.gatewayConnectedUserRepository.save(user);
        return gatewayConnectedUser;
    }
    async getDriverByRadius(location) {
        console.log('${location.coordinates[0]}, ${location.coordinates[1]}');
        console.log(location);
        const drivers = await this.gatewayConnectedUserRepository.query(`SELECT * , ST_Distance('SRID=4326;POINT(${location.coordinates[0]} ${location.coordinates[1]})'::geometry, location) AS dist FROM gateway_connected_user  WHERE role='driver';`);
        const driver = drivers[1];
        console.log('getDriverByRadius driver');
        console.log(driver);
        return driver;
    }
    async getGatewayConnectedDriver(userId) {
        const user = await this.gatewayConnectedUserRepository.findOne({
            where: { userId: '5cb96dd9-0a44-4433-9b14-7756c317b85b', role: 'driver' },
        });
        if (!user) {
            let foundIdentity = await this.gatewayConnectedUserRepository.findOne({
                where: { userId: userId },
            });
            console.log('foundIdentity');
            console.log(foundIdentity);
            throw new common_1.NotFoundException(`Driver of id #${userId} not found`);
        }
        return user;
    }
    async loginUser(loginUserDTO) {
        const user = await this.authService.validateUser(loginUserDTO.email, loginUserDTO.password);
        if (!user) {
            throw new common_1.BadRequestException(`email or password are invalid`);
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
            console.log('decodedser', decodedser);
            user = await this.userRepository.findOne({
                where: { userId: decodedser.sub },
            });
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
    __param(1, (0, typeorm_1.InjectRepository)(gateway_connected_user_entity_1.GatewayConnectedUser)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        auth_service_1.AuthService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map