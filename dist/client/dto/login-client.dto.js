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
exports.VerifyUserOTPInput = exports.LoginUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let LoginUserInput = class LoginUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], LoginUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], LoginUserInput.prototype, "pin", void 0);
LoginUserInput = __decorate([
    (0, graphql_1.InputType)()
], LoginUserInput);
exports.LoginUserInput = LoginUserInput;
class VerifyUserOTPInput {
}
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'user_id of the user' }),
    __metadata("design:type", String)
], VerifyUserOTPInput.prototype, "client_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'otp of the user' }),
    __metadata("design:type", String)
], VerifyUserOTPInput.prototype, "otp", void 0);
exports.VerifyUserOTPInput = VerifyUserOTPInput;
//# sourceMappingURL=login-client.dto.js.map