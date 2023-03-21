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
exports.ParcelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const notifications_service_1 = require("../notifications/notifications.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./entities/order.entity");
const parcel_entity_1 = require("./entities/parcel.entity");
const { Expo } = require('expo-server-sdk');
const sendPushNotification = require('../../utilities/pushNotifications');
const driverDepartingPickupDistance = require('../../utilities/geolocation');
let ParcelsService = class ParcelsService {
    constructor(parcelRepository, orderRepository, userService, notificationsService) {
        this.parcelRepository = parcelRepository;
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.notificationsService = notificationsService;
    }
    async createOrder(createOrderDto) {
        console.log('createOrderDto', createOrderDto);
        const pointObject_orderDriverCoordinates = {
            type: "Point",
            coordinates: [createOrderDto.orderDriverCoordinates.latitude, createOrderDto.orderDriverCoordinates.longitude]
        };
        createOrderDto.orderDriverCoordinates = pointObject_orderDriverCoordinates;
        const pointObject_orderPickupCoordinates = {
            type: "Point",
            coordinates: [createOrderDto.orderPickupCoordinates.coordinates[0], createOrderDto.orderPickupCoordinates.coordinates[1]]
        };
        createOrderDto.orderPickupCoordinates = pointObject_orderPickupCoordinates;
        const pointObject_orderDeliveryCoordinates = {
            type: "Point",
            coordinates: [createOrderDto.orderDeliveryCoordinates.coordinates[0], createOrderDto.orderDeliveryCoordinates.coordinates[1]]
        };
        createOrderDto.orderDeliveryCoordinates = pointObject_orderDeliveryCoordinates;
        console.log('processOrder createOrderDto', createOrderDto);
        const orderSchema = this.orderRepository.create(createOrderDto);
        const order = await this.orderRepository.save(orderSchema);
        return order;
    }
    async getOrdersHistory(userPhone) {
        const user = await this.userService.findOneByPhone(userPhone);
        if (user.role === 'client') {
            const orders = await this.orderRepository.find({
                where: { orderOwnerID: user.userId, orderStatus: 'delivered' },
            });
            return orders;
        }
        if (user.role === 'driver') {
            const orders = await this.orderRepository.find({
                where: { orderDriverID: user.userId, orderStatus: 'delivered' },
            });
            return orders;
        }
        return [];
    }
    async getOrdersByUser(userId, userRole) {
        if (userRole === 'client') {
            const orders = await this.orderRepository.find({
                where: { orderOwnerID: userId },
            });
            return orders;
        }
        if (userRole === 'driver') {
            const orders = await this.orderRepository.find({
                where: { orderDriverID: userId },
            });
            return orders;
        }
        return [];
    }
    async getAllOrders() {
        const orders = await this.orderRepository.find();
        return orders;
    }
    async createParcelDeliveryRequest(createParcelDto) {
        console.log('createParcelDto');
        console.log(createParcelDto);
        const pointObject_exactPickupCoordinates = {
            type: "Point",
            coordinates: [JSON.parse(createParcelDto.exactPickupCoordinates).latitude, JSON.parse(createParcelDto.exactPickupCoordinates).longitude]
        };
        createParcelDto.exactPickupCoordinates = pointObject_exactPickupCoordinates;
        const pointObject_exactDeliveryCoordinates = {
            type: "Point",
            coordinates: [JSON.parse(createParcelDto.exactDeliveryCoordinates).latitude, JSON.parse(createParcelDto.exactDeliveryCoordinates).longitude]
        };
        createParcelDto.exactDeliveryCoordinates = pointObject_exactDeliveryCoordinates;
        console.log('updated createParcelDto', createParcelDto);
        const parcelSchema = this.parcelRepository.create(createParcelDto);
        const parcel = await this.parcelRepository.save(parcelSchema);
        console.log('new parcel');
        console.log(parcel);
        return parcel;
    }
    async startPickupTrip(orderID, driverCoordinates) {
        console.log('startPickupTrip driverCoordinates');
        console.log(driverCoordinates);
        const pointObject_driverCoordinates = {
            type: "Point",
            coordinates: [JSON.parse(driverCoordinates).longitude, JSON.parse(driverCoordinates).latitude]
        };
        let order = await this.findOneByOrderID(orderID);
        order['orderDriverCoordinates'] = pointObject_driverCoordinates;
        order['orderStatus'] = 'pickup';
        let updatedOrder = await this.updateOrder(orderID, order);
        console.log('updatedOrder');
        console.log(updatedOrder);
        const orderOwner = await this.userService.findOne((await order).orderOwnerID);
        const orderOwnerPhone = orderOwner.phone;
        let startPickupTripNotification = {
            orderDriverCoordinates: updatedOrder.orderDriverCoordinates,
            orderPickupCoordinates: updatedOrder.orderPickupCoordinates,
            orderDeliveryCoordinates: updatedOrder.orderDeliveryCoordinates,
            orderOwnerPhone: orderOwner.phone,
            orderOwnerID: orderOwner.userId
        };
        return startPickupTripNotification;
    }
    async updateOrder(orderID, updateOrderDto) {
        const order = await this.orderRepository.preload(Object.assign({ orderID: orderID }, updateOrderDto));
        if (!order) {
            throw new common_1.NotFoundException(`User #${orderID} not found`);
        }
        return this.orderRepository.save(order);
    }
    async processOrder(processOrderDTO) {
        let parcel = await this.findOneByPackageID(processOrderDTO.packageID);
        const parcelOwner = await this.userService.findOne((await parcel).packageOwnerID);
        const acceptingDriver = await this.userService.findOneByPhone(processOrderDTO.driverPhone);
        console.log('acceptingDriver');
        (parcel).packageDriverID = acceptingDriver.userId;
        parcel = await this.updateParcel(processOrderDTO.packageID, parcel);
        console.log('processOrder parcel', parcel);
        let countryCode = acceptingDriver.phone.slice(0, 3);
        let newOrder = {
            orderParcelID: parcel.packageID,
            orderDate: Date.now().toString(),
            orderType: parcel.packageType,
            orderPaymentStatus: 'not-paid',
            orderPaymentMethod: parcel.paymentMethod === null ? 'cash on delivery' : parcel.paymentMethod,
            orderCountry: countryCode && countryCode === '+26' ? 'zw' : 'za',
            orderDriverID: parcel.packageDriverID,
            orderDriverFirstName: acceptingDriver.firstName,
            orderDriverLastName: acceptingDriver.lastName,
            orderDriverCoordinates: processOrderDTO.driverCoordinates,
            orderOwnerID: parcelOwner.userId,
            orderOwnerFirstName: parcelOwner.firstName,
            orderOwnerLastName: parcelOwner.lastName,
            orderPickupTime: processOrderDTO.orderPickupTime,
            orderPickupCoordinates: parcel.exactPickupCoordinates,
            orderPickupAddress: parcel.exactPickupAddress,
            orderPickupDistance: parcel.exactPickupCoordinates,
            orderDeliveryDistance: parcel.packageDeliveryDistance,
            orderDeliveryCoordinates: parcel.exactDeliveryCoordinates,
            orderDeliveryAddress: parcel.exactDeliveryAddress,
            orderDeliveryFee: parcel.packageDeliveryFee,
            orderStatus: 'accepted',
        };
        let order = await this.createOrder(newOrder);
        return order;
    }
    async driverOrderReject(rejectParcelDto) {
        console.log('driver rejected');
        const rejectingDriver = this.userService.findOne(rejectParcelDto.driverID);
        let driverID = (await rejectingDriver).userId;
        let rejectedDriverIds = Array(driverID);
        const drivers = await this.userService.getDrivers(rejectedDriverIds);
        const driver = drivers[0];
        console.log('driver');
        console.log(driver.phone);
        const driverPhone = driver.phone;
        let pushToken;
        console.log('get ExpoPushToken value');
        console.log(pushToken);
        await this.notificationsService.getExpoPushToken(driverPhone).then((value) => {
            console.log('value');
            console.log(value);
            pushToken = value;
        });
        console.log('Got driver pushToken');
        console.log(pushToken);
        const parcel = this.findOneByPackageID(rejectParcelDto.packageID);
        if (Expo.isExpoPushToken(pushToken)) {
            console.log('send PushNotification for  Parcel Accept');
            let category = {
                type: 'accept',
                title: 'driver Parcel Accept'
            };
            parcel['notificationCategory'] = category;
            const message = JSON.stringify(parcel);
            await sendPushNotification(pushToken, message, category);
        }
        return null;
    }
    async findOneByOrderID(orderID) {
        console.log('User orderID');
        console.log(orderID);
        const order = await this.orderRepository.findOne({ where: { orderID: orderID } });
        console.log('order');
        console.log(order);
        if (!order) {
            throw new common_1.NotFoundException(`User #${orderID} not found`);
        }
        return order;
    }
    async findOneByPackageID(packageID) {
        console.log('User packageID');
        console.log(packageID);
        const parcel = await this.parcelRepository.findOne({ where: { packageID: packageID } });
        console.log('parcel');
        console.log(parcel);
        if (!parcel) {
            throw new common_1.NotFoundException(`User #${packageID} not found`);
        }
        return parcel;
    }
    async updateParcel(packageID, updateParcelDto) {
        const parcel = await this.parcelRepository.preload(Object.assign({ packageID: packageID }, updateParcelDto));
        if (!parcel) {
            throw new common_1.NotFoundException(`User #${packageID} not found`);
        }
        return this.parcelRepository.save(parcel);
    }
    findAll() {
        return `This action returns all parcels`;
    }
    findOne(id) {
        return `This action returns a #${id} parcel`;
    }
    remove(id) {
        return `This action removes a #${id} parcel`;
    }
};
ParcelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parcel_entity_1.Parcel)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => notifications_service_1.NotificationsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService,
        notifications_service_1.NotificationsService])
], ParcelsService);
exports.ParcelsService = ParcelsService;
//# sourceMappingURL=parcels.service.js.map