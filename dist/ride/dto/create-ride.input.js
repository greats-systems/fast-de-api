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
exports.AcceptRideInput = exports.CreateRideInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const coordinates_entity_1 = require("../entities/coordinates.entity");
let CreateRideInput = class CreateRideInput {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'customer field' }),
    __metadata("design:type", String)
], CreateRideInput.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'amount field' }),
    __metadata("design:type", String)
], CreateRideInput.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'rideType field' }),
    __metadata("design:type", String)
], CreateRideInput.prototype, "rideType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'distance field' }),
    __metadata("design:type", String)
], CreateRideInput.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'estimatedDuration field' }),
    __metadata("design:type", String)
], CreateRideInput.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Origin, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.OriginInput, {
        nullable: true,
        description: 'Pickup field',
    }),
    __metadata("design:type", coordinates_entity_1.OriginInput)
], CreateRideInput.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Destination, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.DestinationInput, {
        nullable: true,
        description: 'Dropoff field',
    }),
    __metadata("design:type", coordinates_entity_1.DestinationInput)
], CreateRideInput.prototype, "destination", void 0);
CreateRideInput = __decorate([
    (0, graphql_1.InputType)()
], CreateRideInput);
exports.CreateRideInput = CreateRideInput;
let AcceptRideInput = class AcceptRideInput {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'ride field' }),
    __metadata("design:type", String)
], AcceptRideInput.prototype, "rideId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'driver field' }),
    __metadata("design:type", String)
], AcceptRideInput.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String, { description: 'customer field' }),
    __metadata("design:type", String)
], AcceptRideInput.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'distance field' }),
    __metadata("design:type", String)
], AcceptRideInput.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'estimatedDuration field' }),
    __metadata("design:type", String)
], AcceptRideInput.prototype, "estimatedDuration", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Location, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.LocationInput, {
        nullable: true,
        description: 'Driver Current location',
    }),
    __metadata("design:type", coordinates_entity_1.LocationInput)
], AcceptRideInput.prototype, "driver_origin", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => coordinates_entity_1.Location, {
        eager: true,
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    (0, graphql_1.Field)(() => coordinates_entity_1.LocationInput, {
        nullable: true,
        description: 'Customer pickup location',
    }),
    __metadata("design:type", coordinates_entity_1.LocationInput)
], AcceptRideInput.prototype, "customer_origin", void 0);
AcceptRideInput = __decorate([
    (0, graphql_1.InputType)()
], AcceptRideInput);
exports.AcceptRideInput = AcceptRideInput;
//# sourceMappingURL=create-ride.input.js.map