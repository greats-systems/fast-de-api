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
exports.DestinationInput = exports.OriginInput = exports.Destination = exports.Origin = exports.Coordinates = exports.LocationInput = exports.Location = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const ride_entity_1 = require("./ride.entity");
let Location = class Location {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'locationID field (placeholder)' }),
    __metadata("design:type", String)
], Location.prototype, "locationID", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.origin),
    __metadata("design:type", ride_entity_1.Ride)
], Location.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], Location.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], Location.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], Location.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'category of either pickup or destination field' }),
    __metadata("design:type", String)
], Location.prototype, "category", void 0);
Location = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)('LocationType')
], Location);
exports.Location = Location;
let LocationInput = class LocationInput {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.destination),
    __metadata("design:type", ride_entity_1.Ride)
], LocationInput.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], LocationInput.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], LocationInput.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], LocationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'category of either pickup or destination field' }),
    __metadata("design:type", String)
], LocationInput.prototype, "category", void 0);
LocationInput = __decorate([
    (0, graphql_1.InputType)('LocationInput'),
    (0, graphql_1.ObjectType)('LocationInputType')
], LocationInput);
exports.LocationInput = LocationInput;
let Coordinates = class Coordinates {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], Coordinates.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], Coordinates.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], Coordinates.prototype, "address", void 0);
Coordinates = __decorate([
    (0, graphql_1.InputType)('CoordinatesInput'),
    (0, graphql_1.ObjectType)('CoordinatesType'),
    (0, typeorm_1.Entity)()
], Coordinates);
exports.Coordinates = Coordinates;
let Origin = class Origin {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'locationID field (placeholder)' }),
    __metadata("design:type", String)
], Origin.prototype, "locationID", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.origin),
    __metadata("design:type", ride_entity_1.Ride)
], Origin.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], Origin.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], Origin.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], Origin.prototype, "address", void 0);
Origin = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)('OriginType')
], Origin);
exports.Origin = Origin;
let Destination = class Destination {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'locationID field (placeholder)' }),
    __metadata("design:type", String)
], Destination.prototype, "locationID", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.destination),
    __metadata("design:type", ride_entity_1.Ride)
], Destination.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], Destination.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], Destination.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], Destination.prototype, "address", void 0);
Destination = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)('DestinationType')
], Destination);
exports.Destination = Destination;
let OriginInput = class OriginInput {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.destination),
    __metadata("design:type", ride_entity_1.Ride)
], OriginInput.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], OriginInput.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], OriginInput.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], OriginInput.prototype, "address", void 0);
OriginInput = __decorate([
    (0, graphql_1.InputType)('OriginInput'),
    (0, graphql_1.ObjectType)('OriginInputType')
], OriginInput);
exports.OriginInput = OriginInput;
let DestinationInput = class DestinationInput {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => ride_entity_1.Ride, (ride) => ride.destination),
    __metadata("design:type", ride_entity_1.Ride)
], DestinationInput.prototype, "ride", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'latitude field' }),
    __metadata("design:type", Number)
], DestinationInput.prototype, "latitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'longitude field' }),
    __metadata("design:type", Number)
], DestinationInput.prototype, "longitude", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'address field' }),
    __metadata("design:type", String)
], DestinationInput.prototype, "address", void 0);
DestinationInput = __decorate([
    (0, graphql_1.InputType)('DestinationInput'),
    (0, graphql_1.ObjectType)('DestinationInputType')
], DestinationInput);
exports.DestinationInput = DestinationInput;
//# sourceMappingURL=coordinates.entity.js.map