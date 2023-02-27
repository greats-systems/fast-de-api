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
exports.ParcelsController = void 0;
const common_1 = require("@nestjs/common");
const parcels_service_1 = require("./parcels.service");
const update_parcel_dto_1 = require("./dto/update-parcel.dto");
let ParcelsController = class ParcelsController {
    constructor(parcelsService) {
        this.parcelsService = parcelsService;
    }
    create(data) {
        console.log('createParcel data');
        console.log(data.data);
        return this.parcelsService.create(data.data);
    }
    acceptReject(data) {
        console.log('processOrder data');
        console.log(data);
        return this.parcelsService.processOrder(data.data);
    }
    runDelivery(data) {
        console.log('runDelivery data');
        console.log(data);
        return this.parcelsService.runDelivery(data.data.orderID, data.data.status);
    }
    getOrdersByUser(data) {
        console.log('getOrdersByUser data');
        console.log(data);
        return this.parcelsService.getOrdersByUser(data.userID, data.userRole);
    }
    getOrdersHistory(data) {
        console.log('getOrdersHistory data');
        console.log(data);
        return this.parcelsService.getOrdersHistory(data.userPhone);
    }
    findAll() {
        return this.parcelsService.findAll();
    }
    getAllOrders() {
        console.log('getting orders');
        return this.parcelsService.getAllOrders();
    }
    findOne(id) {
        return this.parcelsService.findOne(+id);
    }
    update(packageID, updateParcelDto) {
        return this.parcelsService.updateParcel(packageID, updateParcelDto);
    }
    remove(id) {
        return this.parcelsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('createParcel'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ParcelsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('processOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "acceptReject", null);
__decorate([
    (0, common_1.Post)('runDelivery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "runDelivery", null);
__decorate([
    (0, common_1.Post)('getOrdersByUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "getOrdersByUser", null);
__decorate([
    (0, common_1.Post)('getOrdersHistory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "getOrdersHistory", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getAllOrders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_parcel_dto_1.UpdateParcelDto]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParcelsController.prototype, "remove", null);
ParcelsController = __decorate([
    (0, common_1.Controller)('parcels'),
    __metadata("design:paramtypes", [parcels_service_1.ParcelsService])
], ParcelsController);
exports.ParcelsController = ParcelsController;
//# sourceMappingURL=parcels.controller.js.map