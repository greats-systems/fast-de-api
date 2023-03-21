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
exports.SocketsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const parcels_service_1 = require("../parcels/parcels.service");
const users_service_1 = require("../users/users.service");
const events_1 = require("./events");
const rooms_1 = require("./rooms");
let SocketsGateway = class SocketsGateway {
    constructor(parcelsService, usersService) {
        this.parcelsService = parcelsService;
        this.usersService = usersService;
    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleConnection(client) {
        var _a, _b;
        console.log(`user ${client.user.userId} with socket ${client.id} connected with device ${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.deviceId}`);
        client.join((0, rooms_1.getUserDeviceRoom)(client.user.userId, (_b = client === null || client === void 0 ? void 0 : client.user) === null || _b === void 0 ? void 0 : _b.deviceId));
    }
    handleDisconnect(client) {
        var _a, _b;
        console.log(`user ${client.user.userId} with socket ${client.id} with device ${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.deviceId} DISCONNECTED`);
        client.leave((0, rooms_1.getUserDeviceRoom)(client.user.userId, (_b = client === null || client === void 0 ? void 0 : client.user) === null || _b === void 0 ? void 0 : _b.deviceId));
    }
    async updateConnectedUserLocation(client, body) {
        console.log('updateConnectedUserLocation body', body.coords);
        await this.usersService.updateGatewayConnectedUserLocation({
            userId: client.user.userId,
            latitude: body.coords.latitude,
            longitude: body.coords.longitude
        });
    }
    async handleParcelDeliveryRequest(client, body) {
        console.log('parcelDeliveryRequest body');
        console.log(body);
        let newParcelDeliveryRequest = await this.parcelsService.createParcelDeliveryRequest(body);
        if (newParcelDeliveryRequest) {
            let gatewayConnectedUser = await this.usersService.getDriverByRadius(newParcelDeliveryRequest.exactPickupCoordinates);
            (0, rooms_1.broadcastParcelDeliveryRequestToDriver)(this.server, gatewayConnectedUser.userId, gatewayConnectedUser === null || gatewayConnectedUser === void 0 ? void 0 : gatewayConnectedUser.deviceId, newParcelDeliveryRequest);
        }
    }
    async handleParcelDeliveryAccepted(client, body) {
        let processedOrder = await this.parcelsService.processOrder(body);
        if (processedOrder) {
            console.log('Notify driver of processed Order ', processedOrder);
            this.server.emit('responseParcelDeliveryRequest', { data: processedOrder });
            let gatewayConnectedUser = await this.usersService.getGatewayConnectedUser(processedOrder.orderOwnerID);
            console.log('Notify Client of processed Order ', processedOrder);
            await this.sleep(5000).then(() => console.log('I waited 5 seconds'));
            (0, rooms_1.broadcastParcelDeliveryResolveToOrderOwner)(this.server, gatewayConnectedUser.userId, gatewayConnectedUser === null || gatewayConnectedUser === void 0 ? void 0 : gatewayConnectedUser.deviceId, processedOrder);
        }
        else {
            this.server.emit('responseParcelDeliveryRequest', { error: 'error processing order' });
        }
        return processedOrder;
    }
    async startPickupTrip(client, body) {
        console.log('startPickupTrip body');
        console.log(body);
        let runPickupTrip = await this.parcelsService.startPickupTrip(body.orderID, body.driverCoordinates);
        if (runPickupTrip) {
            let gatewayConnectedUser = await this.usersService.getGatewayConnectedUser(runPickupTrip.orderOwnerID);
            (0, rooms_1.broadcastParcelDeliveryRequestToDriver)(this.server, gatewayConnectedUser.userId, gatewayConnectedUser === null || gatewayConnectedUser === void 0 ? void 0 : gatewayConnectedUser.deviceId, runPickupTrip);
            return this.server.emit('responseParcelDeliveryRequest', { data: runPickupTrip });
        }
        else {
            return this.server.emit('responseParcelDeliveryRequest', { error: 'error processing order' });
        }
    }
    startMyTimer(client, body) {
        var _a, _b;
        (0, rooms_1.stopTimerForUserDevice)(client.user.userId, (_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.deviceId);
        (0, rooms_1.startTimerForUserDevice)(this.server, client.user.userId, (_b = client === null || client === void 0 ? void 0 : client.user) === null || _b === void 0 ? void 0 : _b.deviceId, body.dur);
    }
    stopMyTimer(client) {
        var _a;
        (0, rooms_1.stopTimerForUserDevice)(client.user.userId, (_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.deviceId);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], SocketsGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateUserLocation'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SocketsGateway.prototype, "updateConnectedUserLocation", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('parcelDeliveryRequest'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SocketsGateway.prototype, "handleParcelDeliveryRequest", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('parcelDeliveryAccepted'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SocketsGateway.prototype, "handleParcelDeliveryAccepted", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('startPickupTrip'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SocketsGateway.prototype, "startPickupTrip", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_1.TimerEvents.timerStart.toString()),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "startMyTimer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_1.TimerEvents.timerStop.toString()),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SocketsGateway.prototype, "stopMyTimer", null);
SocketsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [parcels_service_1.ParcelsService,
        users_service_1.UsersService])
], SocketsGateway);
exports.SocketsGateway = SocketsGateway;
//# sourceMappingURL=sockets.gateway.js.map