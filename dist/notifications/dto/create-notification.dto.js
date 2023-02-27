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
exports.CreateExpoPushTokenDto = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateExpoPushTokenDto = class CreateExpoPushTokenDto {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'expoPushToken of the user' }),
    __metadata("design:type", String)
], CreateExpoPushTokenDto.prototype, "expoPushToken", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'userId of the user' }),
    __metadata("design:type", String)
], CreateExpoPushTokenDto.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { description: ' service type if driver/customer' }),
    __metadata("design:type", String)
], CreateExpoPushTokenDto.prototype, "userRole", void 0);
CreateExpoPushTokenDto = __decorate([
    (0, graphql_1.InputType)()
], CreateExpoPushTokenDto);
exports.CreateExpoPushTokenDto = CreateExpoPushTokenDto;
//# sourceMappingURL=create-notification.dto.js.map