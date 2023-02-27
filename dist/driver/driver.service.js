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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../common/auth/auth.service");
const typeorm_2 = require("typeorm");
const driver_entity_1 = require("./entities/driver.entity");
let DriverService = class DriverService {
    constructor(driverRepository, authService) {
        this.driverRepository = driverRepository;
        this.authService = authService;
    }
    async findAll() {
        return await this.driverRepository.find();
    }
    async findOne(driverId) {
        const driver = await this.driverRepository.findOne({
            where: { driverId: driverId },
        });
        if (!driver) {
            throw new common_1.NotFoundException(`Driver #${driverId} not found`);
        }
        return driver;
    }
    async getDriverProfile(token) {
        const decodedser = await this.authService.decodeUserToken(token);
        let driver;
        if (decodedser) {
            driver = await this.driverRepository.findOne({
                where: { driverId: decodedser.sub },
            });
            console.log('getDriverProfile');
            console.log(decodedser.sub);
        }
        else {
            throw new common_1.NotFoundException(`Driver token #${token} not valid`);
        }
        if (!driver) {
            throw new common_1.NotFoundException(`Driver #${decodedser.sub} not found`);
        }
        return driver;
    }
    async findOneByPhone(phone) {
        const driver = await this.driverRepository.findOne({ where: { phone: phone } });
        if (!driver) {
            throw new common_1.NotFoundException(`Driver #${phone} not found`);
        }
        return driver;
    }
    async getDrivers(role) {
        const drivers = await this.driverRepository.find({ where: { role: role } });
        if (!drivers) {
            throw new common_1.NotFoundException(`Drivers ${role} not found`);
        }
        return drivers;
    }
    async updateDriverProfile(data) {
        console.log('updateDriverProfile data');
        console.log(data);
        let driverId = data.driverId;
        let updateDriverInput = data.data;
        console.log('updateDriverProfile driverId');
        const driver = await this.driverRepository.preload(Object.assign({ driverId: driverId }, updateDriverInput));
        if (!driver) {
            throw new common_1.NotFoundException(`Driver #${driverId} not found`);
        }
        let update = await this.driverRepository.save(driver);
        console.log('success updated Driver Profile');
        console.log(update);
        return update;
    }
    async remove(driverId) {
        const driver = await this.findOne(driverId);
        await this.driverRepository.remove(driver);
        return {
            driverId: driverId,
            phone: '',
            pin: '',
            firstName: '',
            lastName: '',
            role: '',
            rides: [],
        };
    }
};
DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map