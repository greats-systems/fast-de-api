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
exports.RideResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const ride_service_1 = require("./ride.service");
const ride_entity_1 = require("./entities/ride.entity");
const create_ride_input_1 = require("./dto/create-ride.input");
const update_ride_input_1 = require("./dto/update-ride.input");
const user_entity_1 = require("../users/entities/user.entity");
const trip_entity_1 = require("./entities/trip.entity");
let RideResolver = class RideResolver {
    constructor(rideService) {
        this.rideService = rideService;
    }
    async createRide(createRideInput, req) {
        console.log('req.headers.authorization ');
        const token = req.headers.authorization;
        const newRideRequest = this.rideService.createRide(createRideInput);
        return newRideRequest;
    }
    async acceptRide(acceptRideInput, req) {
        console.log('req.headers.authorization ');
        const token = req.headers.authorization;
        const acceptedRideRequest = this.rideService.driverAcceptRideRequest(acceptRideInput);
        return acceptedRideRequest;
    }
    findAll() {
        return this.rideService.findAll();
    }
    findOne(rideID) {
        return this.rideService.findOne(rideID);
    }
    customer(ride) {
        return this.rideService.getCustomer(ride.customerId);
    }
    updateRide(updateRideInput) {
        return this.rideService.update(updateRideInput.rideID, updateRideInput);
    }
    removeRide(rideID) {
        return this.rideService.remove(rideID);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => ride_entity_1.Ride),
    __param(0, (0, graphql_1.Args)('createRideInput')),
    __param(1, (0, graphql_1.Context)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ride_input_1.CreateRideInput, Object]),
    __metadata("design:returntype", Promise)
], RideResolver.prototype, "createRide", null);
__decorate([
    (0, graphql_1.Mutation)(() => trip_entity_1.Trip),
    __param(0, (0, graphql_1.Args)('acceptRideInput')),
    __param(1, (0, graphql_1.Context)('req')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ride_input_1.AcceptRideInput, Object]),
    __metadata("design:returntype", Promise)
], RideResolver.prototype, "acceptRide", null);
__decorate([
    (0, graphql_1.Query)(() => [ride_entity_1.Ride], { name: 'getAllRides' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RideResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => ride_entity_1.Ride, { name: 'getRide' }),
    __param(0, (0, graphql_1.Args)('rideID', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RideResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_entity_1.User),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ride_entity_1.Ride]),
    __metadata("design:returntype", Promise)
], RideResolver.prototype, "customer", null);
__decorate([
    (0, graphql_1.Mutation)(() => ride_entity_1.Ride),
    __param(0, (0, graphql_1.Args)('updateRideInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ride_input_1.UpdateRideInput]),
    __metadata("design:returntype", void 0)
], RideResolver.prototype, "updateRide", null);
__decorate([
    (0, graphql_1.Mutation)(() => ride_entity_1.Ride),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RideResolver.prototype, "removeRide", null);
RideResolver = __decorate([
    (0, graphql_1.Resolver)(() => ride_entity_1.Ride),
    __metadata("design:paramtypes", [ride_service_1.RideService])
], RideResolver);
exports.RideResolver = RideResolver;
//# sourceMappingURL=ride.resolver.js.map