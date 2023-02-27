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
exports.LoginUserDTO = exports.LoginMobileUserDTO = void 0;
const graphql_1 = require("@nestjs/graphql");
let LoginMobileUserDTO = class LoginMobileUserDTO {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], LoginMobileUserDTO.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], LoginMobileUserDTO.prototype, "pin", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'app of the user' }),
    __metadata("design:type", String)
], LoginMobileUserDTO.prototype, "app", void 0);
LoginMobileUserDTO = __decorate([
    (0, graphql_1.InputType)()
], LoginMobileUserDTO);
exports.LoginMobileUserDTO = LoginMobileUserDTO;
let LoginUserDTO = class LoginUserDTO {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "password", void 0);
LoginUserDTO = __decorate([
    (0, graphql_1.InputType)()
], LoginUserDTO);
exports.LoginUserDTO = LoginUserDTO;
//# sourceMappingURL=login-user.input.js.map