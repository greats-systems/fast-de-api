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
exports.RideService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notifications_service_1 = require("../notifications/notifications.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const ride_entity_1 = require("./entities/ride.entity");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const graphql_1 = require("@nestjs/graphql");
const trip_entity_1 = require("./entities/trip.entity");
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../../utilities/pushNotifications');
const pubSub = new graphql_subscriptions_1.PubSub();
let RideService = class RideService {
    constructor(rideRepository, tripRepository, userService, notificationsService) {
        this.rideRepository = rideRepository;
        this.tripRepository = tripRepository;
        this.userService = userService;
        this.notificationsService = notificationsService;
    }
    newRideRequest() {
        return pubSub.asyncIterator('newRideRequest');
    }
    async createRide(createRideInput) {
        console.log('create Ride Request');
        const createRide = this.rideRepository.create(createRideInput);
        const savedRide = await this.rideRepository.save(createRideInput);
        let driverID = '';
        let rejectedDriverIds = Array(driverID);
        const drivers = await this.userService.getDrivers(rejectedDriverIds);
        const driver = drivers[0];
        console.log('driver');
        console.log(driver.userId);
        const driverId = driver.userId;
        let pushToken;
        console.log('get ExpoPushToken value');
        console.log(pushToken);
        await this.notificationsService.getExpoPushToken(driverId).then((value) => {
            console.log('value');
            console.log(value);
            pushToken = value;
        });
        console.log('Got driver pushToken');
        console.log(pushToken);
        if (Expo.isExpoPushToken(pushToken)) {
            console.log('send PushNotification for  Ride Request');
            let category = {
                type: 'request',
                title: 'driver Ride Request'
            };
            savedRide['notificationCategory'] = category;
            const message = JSON.stringify(savedRide);
            await sendPushNotification(pushToken, message, category);
        }
        pubSub.publish('newRideRequest', { newRideRequest: savedRide });
        return savedRide;
    }
    async driverAcceptRideRequest(acceptRideInput) {
        console.log('accept Ride Request');
        const acceptedRideInput = acceptRideInput;
        console.log(acceptRideInput);
        const savedTrip = await this.tripRepository.save(acceptedRideInput);
        const customerId = acceptedRideInput.customerId;
        console.log('savedTrip');
        console.log(savedTrip);
        let pushToken;
        console.log('get ExpoPushToken value');
        console.log(pushToken);
        await this.notificationsService.getExpoPushToken(customerId).then((value) => {
            console.log('value');
            console.log(value);
            pushToken = value;
        });
        console.log('Got customer pushToken');
        console.log(pushToken);
        if (Expo.isExpoPushToken(pushToken)) {
            console.log('send PushNotification for  saved Trip');
            let category = {
                type: 'accept',
                title: 'driver Ride Accept'
            };
            savedTrip['notificationCategory'] = category;
            const message = JSON.stringify(savedTrip);
            await sendPushNotification(pushToken, message, category);
        }
        pubSub.publish('savedTrip', { savedTrip: savedTrip });
        return savedTrip;
    }
    findAll() {
        return this.rideRepository.find({
            relations: {
                customer: true,
            },
        });
    }
    findOne(rideID) {
        return this.rideRepository.findOneBy({ rideID });
    }
    update(rideID, updateRideInput) {
        return this.rideRepository.findOneBy({ rideID });
    }
    async remove(rideID) {
        await this.rideRepository.delete(rideID);
    }
    async getCustomer(customerId) {
        return await this.userService.findOne(customerId);
    }
};
__decorate([
    (0, graphql_1.Subscription)((returns) => ride_entity_1.Ride, { name: 'newRideRequest' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RideService.prototype, "newRideRequest", null);
RideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ride_entity_1.Ride)),
    __param(1, (0, typeorm_1.InjectRepository)(trip_entity_1.Trip)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => notifications_service_1.NotificationsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService,
        notifications_service_1.NotificationsService])
], RideService);
exports.RideService = RideService;
//# sourceMappingURL=ride.service.js.map