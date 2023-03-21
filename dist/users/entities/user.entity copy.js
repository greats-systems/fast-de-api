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
exports.GatewayConnectedUser = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let GatewayConnectedUser = class GatewayConnectedUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'id of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'deviceId of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'currentSocketID of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "currentSocketID", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'currentLocation of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "lastKnownLocation", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'role of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'issuedTime of the user' }),
    __metadata("design:type", String)
], GatewayConnectedUser.prototype, "issuedTime", void 0);
GatewayConnectedUser = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)('UserType')
], GatewayConnectedUser);
exports.GatewayConnectedUser = GatewayConnectedUser;
//# sourceMappingURL=user.entity%20copy.js.map