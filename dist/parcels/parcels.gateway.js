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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
let ParcelsGateway = class ParcelsGateway {
    constructor() {
        this.logger = new common_1.Logger('ParcelsGateway');
    }
    handleDisconnect(client) {
        console.log('handleDisconnect', client.id);
    }
    afterInit(server) {
        this.logger.log('Initialized!');
    }
    connectDevice(client, room) {
        console.log('connectDeviceToParcelDeliveryRequest', room);
        client.join('parcelDeliveryRequest');
        client.emit('deviceConnectedToParcelDeliveryRequest', 'deviceConnectedToParcelDeliveryRequest');
    }
    handleAcceptedOrder(client, message) {
        this.wss.to(message.room).emit('chatToClient', message);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ParcelsGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('connectDeviceToParcelDeliveryRequest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ParcelsGateway.prototype, "connectDevice", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('acceptedOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ParcelsGateway.prototype, "handleAcceptedOrder", null);
ParcelsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], ParcelsGateway);
exports.ParcelsGateway = ParcelsGateway;
//# sourceMappingURL=parcels.gateway.js.map