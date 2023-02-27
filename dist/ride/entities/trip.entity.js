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
exports.Trip = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const coordinates_entity_1 = require("./coordinates.entity");
const ride_entity_1 = require("./ride.entity");
let Trip = class Trip {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'RideService field' }),
    __metadata("design:type", String)
], Trip.prototype, "rideServiceID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'ride ID field' }),
    __metadata("design:type", String)
], Trip.prototype, "rideId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'distance field' }),
    __metadata("design:type", String)
], Trip.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'estimatedDuration field' }),
    __metadata("design:type", String)
], Trip.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride),
    (0, graphql_1.Field)(() => ride_entity_1.Ride, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'rideId' }),
    __metadata("design:type", ride_entity_1.Ride)
], Trip.prototype, "ride_request", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (customer) => customer.rides),
    (0, graphql_1.Field)((type) => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Trip.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (driver) => driver.rides),
    (0, graphql_1.Field)((type) => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Trip.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Location, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.Location, {
        nullable: true,
        description: 'Driver Initial location',
    }),
    __metadata("design:type", coordinates_entity_1.Location)
], Trip.prototype, "driver_origin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Location, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.Location, {
        nullable: true,
        description: 'Customer pickup location',
    }),
    __metadata("design:type", coordinates_entity_1.Location)
], Trip.prototype, "customer_origin", void 0);
Trip = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Trip);
exports.Trip = Trip;
//# sourceMappingURL=trip.entity.js.map