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
exports.UpdateExpoPushTokenDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_notification_dto_1 = require("./create-notification.dto");
const graphql_1 = require("@nestjs/graphql");
let UpdateExpoPushTokenDto = class UpdateExpoPushTokenDto extends (0, mapped_types_1.PartialType)(create_notification_dto_1.CreateExpoPushTokenDto) {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'expoPushToken of the user' }),
    __metadata("design:type", String)
], UpdateExpoPushTokenDto.prototype, "expoPushToken", void 0);
UpdateExpoPushTokenDto = __decorate([
    (0, graphql_1.InputType)()
], UpdateExpoPushTokenDto);
exports.UpdateExpoPushTokenDto = UpdateExpoPushTokenDto;
//# sourceMappingURL=update-notification.dto.js.map