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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
let ChatGateway = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger('ChatGateway');
    }
    afterInit(server) {
        this.logger.log('Initialized!');
    }
    handleRoomJoin(client, room) {
        client.join(room);
        client.emit('joinedRoom', room);
    }
    connectDevice(client, room) {
        client.join('parcelDeliveryRequest');
        client.emit('deviceConnected', room);
    }
    handleMessage(client, message) {
        this.wss.to(message.room).emit('chatToClient', message);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleRoomJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('connectDevice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "connectDevice", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('chatToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessage", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)()
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map