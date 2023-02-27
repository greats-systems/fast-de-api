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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../common/auth/auth.service");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./entities/client.entity");
let ClientService = class ClientService {
    constructor(clientRepository, authService) {
        this.clientRepository = clientRepository;
        this.authService = authService;
    }
    async findOne(clientId) {
        const client = await this.clientRepository.findOne({
            where: { clientId: clientId },
        });
        if (!client) {
            throw new common_1.NotFoundException(`Client #${clientId} not found`);
        }
        return client;
    }
    async getClientProfile(token) {
        const decodeduser = await this.authService.decodeUserToken(token);
        let client;
        if (decodeduser) {
            client = await this.clientRepository.findOne({
                where: { clientId: decodeduser.sub },
            });
            console.log('getClientProfile');
            console.log(decodeduser.sub);
        }
        else {
            throw new common_1.NotFoundException(`Client token #${token} not valid`);
        }
        if (!client) {
            throw new common_1.NotFoundException(`Client #${decodeduser.sub} not found`);
        }
        return client;
    }
    async findOneByPhone(phone) {
        const client = await this.clientRepository.findOne({ where: { phone: phone } });
        if (!client) {
            throw new common_1.NotFoundException(`Client #${phone} not found`);
        }
        return client;
    }
    async updateClientProfile(data) {
        console.log('updateClientProfile data');
        console.log(data);
        let clientId = data.clientId;
        let updateClientInput = data.data;
        console.log('updateClientProfile clientId');
        const client = await this.clientRepository.preload(Object.assign({ clientId: clientId }, updateClientInput));
        if (!client) {
            throw new common_1.NotFoundException(`Client #${clientId} not found`);
        }
        let update = await this.clientRepository.save(client);
        console.log('success updated Client Profile');
        console.log(update);
        return update;
    }
    async remove(clientId) {
        const client = await this.findOne(clientId);
        await this.clientRepository.remove(client);
        return {
            clientId: clientId,
            phone: '',
            pin: '',
            firstName: '',
            lastName: '',
            role: '',
            rides: [],
        };
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map