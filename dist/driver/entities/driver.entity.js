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
exports.Driver = void 0;
const graphql_1 = require("@nestjs/graphql");
const ride_entity_1 = require("../../ride/entities/ride.entity");
const typeorm_1 = require("typeorm");
let Driver = class Driver {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String, { description: 'id of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'firstName of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => String, { description: 'firstName of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'lastName of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "pin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String, { description: 'role of the user' }),
    __metadata("design:type", String)
], Driver.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ride_entity_1.Ride, (ride) => ride.driver),
    (0, graphql_1.Field)(() => [ride_entity_1.Ride], { nullable: true }),
    __metadata("design:type", Array)
], Driver.prototype, "rides", void 0);
Driver = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)('Driver')
], Driver);
exports.Driver = Driver;
//# sourceMappingURL=driver.entity.js.map