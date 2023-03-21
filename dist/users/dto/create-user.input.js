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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayConnectedUserDTO = exports.CreateUserDTO = exports.CreateMobileUserDTO = void 0;
const typeorm_1 = require("typeorm");
const geojson_1 = require("geojson");
class CreateMobileUserDTO {
}
exports.CreateMobileUserDTO = CreateMobileUserDTO;
class CreateUserDTO {
}
exports.CreateUserDTO = CreateUserDTO;
class GatewayConnectedUserDTO {
}
__decorate([
    (0, typeorm_1.Index)({ spatial: true }),
    (0, typeorm_1.Column)({
        type: 'geometry',
        spatialFeatureType: 'Point',
        srid: 4326,
        nullable: true
    }),
    __metadata("design:type", typeof (_a = typeof geojson_1.Point !== "undefined" && geojson_1.Point) === "function" ? _a : Object)
], GatewayConnectedUserDTO.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], GatewayConnectedUserDTO.prototype, "dist", void 0);
exports.GatewayConnectedUserDTO = GatewayConnectedUserDTO;
//# sourceMappingURL=create-user.input.js.map