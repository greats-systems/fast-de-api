"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcelsModule = void 0;
const common_1 = require("@nestjs/common");
const parcels_service_1 = require("./parcels.service");
const parcels_controller_1 = require("./parcels.controller");
const typeorm_1 = require("@nestjs/typeorm");
const parcel_entity_1 = require("./entities/parcel.entity");
const users_module_1 = require("../users/users.module");
const notifications_module_1 = require("../notifications/notifications.module");
const users_service_1 = require("../users/users.service");
const common_module_1 = require("../common/common.module");
const order_entity_1 = require("./entities/order.entity");
let ParcelsModule = class ParcelsModule {
};
ParcelsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            notifications_module_1.NotificationsModule,
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forFeature([parcel_entity_1.Parcel, order_entity_1.Order]),
        ],
        controllers: [parcels_controller_1.ParcelsController],
        providers: [parcels_service_1.ParcelsService, users_service_1.UsersService],
        exports: [parcels_service_1.ParcelsService, typeorm_1.TypeOrmModule],
    })
], ParcelsModule);
exports.ParcelsModule = ParcelsModule;
//# sourceMappingURL=parcels.module.js.map