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
exports.Ride = void 0;
const graphql_1 = require("@nestjs/graphql");
const driver_entity_1 = require("../../driver/entities/driver.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const coordinates_entity_1 = require("./coordinates.entity");
let Ride = class Ride {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'Example field' }),
    __metadata("design:type", String)
], Ride.prototype, "rideID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'customer field' }),
    __metadata("design:type", String)
], Ride.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (customer) => customer.rides),
    (0, graphql_1.Field)((type) => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Ride.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => driver_entity_1.Driver, (driver) => driver.rides),
    (0, graphql_1.Field)((type) => driver_entity_1.Driver),
    __metadata("design:type", driver_entity_1.Driver)
], Ride.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'amount field' }),
    __metadata("design:type", String)
], Ride.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'rideType field' }),
    __metadata("design:type", String)
], Ride.prototype, "rideType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'distance field' }),
    __metadata("design:type", String)
], Ride.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'estimatedDuration field' }),
    __metadata("design:type", String)
], Ride.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Origin, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.Origin, {
        nullable: true,
        description: 'Pickup field',
    }),
    __metadata("design:type", coordinates_entity_1.Origin)
], Ride.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Destination, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.Destination, {
        nullable: true,
        description: 'Dropoff field',
    }),
    __metadata("design:type", coordinates_entity_1.Destination)
], Ride.prototype, "destination", void 0);
Ride = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Ride);
exports.Ride = Ride;
//# sourceMappingURL=ride.entity.js.map