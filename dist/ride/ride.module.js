"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideModule = void 0;
const common_1 = require("@nestjs/common");
const ride_service_1 = require("./ride.service");
const ride_resolver_1 = require("./ride.resolver");
const common_module_1 = require("../common/common.module");
const typeorm_1 = require("@nestjs/typeorm");
const ride_entity_1 = require("./entities/ride.entity");
const users_service_1 = require("../users/users.service");
const users_module_1 = require("../users/users.module");
const notifications_module_1 = require("../notifications/notifications.module");
const coordinates_entity_1 = require("./entities/coordinates.entity");
const trip_entity_1 = require("./entities/trip.entity");
let RideModule = class RideModule {
};
RideModule = __decorate([
    (0, common_1.Module)({
        imports: [
            notifications_module_1.NotificationsModule,
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            typeorm_1.TypeOrmModule.forFeature([ride_entity_1.Ride, coordinates_entity_1.Location, coordinates_entity_1.Origin, coordinates_entity_1.Destination, trip_entity_1.Trip]),
        ],
        providers: [
            ride_resolver_1.RideResolver,
            ride_service_1.RideService,
            users_service_1.UsersService,
        ],
        exports: [ride_service_1.RideService],
    })
], RideModule);
exports.RideModule = RideModule;
//# sourceMappingURL=ride.module.js.map