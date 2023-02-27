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
exports.CreateParcelDto = void 0;
const typeorm_1 = require("typeorm");
class CreateParcelDto {
}
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageOwnerID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageDriverID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageHeight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageWidth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageDepth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageWeight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "addressType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "exactPickupAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "exactDeliveryAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "exactPickupCoordinates", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "exactDeliveryCoordinates", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageDeliveryDistance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateParcelDto.prototype, "packageDeliveryFee", void 0);
exports.CreateParcelDto = CreateParcelDto;
//# sourceMappingURL=create-parcel.dto.js.map