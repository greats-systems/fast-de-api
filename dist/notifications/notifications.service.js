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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notification_entity_1 = require("./entities/notification.entity");
let NotificationsService = class NotificationsService {
    constructor(notificationsRepository) {
        this.notificationsRepository = notificationsRepository;
    }
    async create(createExpoPushTokenDto) {
        console.log('ExpoPushTokenDto');
        console.log(createExpoPushTokenDto);
        const phone = createExpoPushTokenDto.phone;
        let response;
        const token = await this.notificationsRepository.findOne({
            where: { phone: phone },
        });
        console.log('Known device Push Token');
        console.log('old expoPushToken');
        console.log(createExpoPushTokenDto.expoPushToken);
        if (token) {
            response = `Push Token for ${phone} exist`;
        }
        else {
            await this.notificationsRepository.save(createExpoPushTokenDto);
            response = `Push Token for ${phone} successfully added`;
        }
        if (token !== null && token.expoPushToken !== createExpoPushTokenDto.expoPushToken) {
            console.log('updating Push Token ....');
            await this.notificationsRepository.createQueryBuilder('users')
                .delete()
                .from(notification_entity_1.Notifications)
                .where("phone = :phone", { phone: createExpoPushTokenDto.phone })
                .execute();
            const savedToken = await this.notificationsRepository.save(createExpoPushTokenDto);
            response = `Push Token ${savedToken} for ${phone} updated`;
            console.log('new expoPushToken');
            console.log(token.expoPushToken);
        }
        return response;
    }
    findAll() {
        return `This action returns all notifications`;
    }
    async getExpoPushToken(phone) {
        console.log(`get user ${phone}  stored pushToken`);
        const token = await this.notificationsRepository.findOne({
            where: { phone: phone },
        });
        console.log('requested user pushToken');
        console.log(token);
        if (!token) {
            throw new common_1.NotFoundException(`Token  for user with id ${phone} not found`);
        }
        return token.expoPushToken;
    }
    async getDriverExpoPushToken(userRole) {
        const token = await this.notificationsRepository.findOne({
            where: { userRole: userRole },
        });
        if (!token) {
            throw new common_1.NotFoundException(`Token for ${userRole} not found`);
        }
        return token.expoPushToken;
    }
    update(id, updateExpoPushTokenDto) {
        return `This action updates a #${id} notification`;
    }
    remove(id) {
        return `This action removes a #${id} notification`;
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_entity_1.Notifications)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map