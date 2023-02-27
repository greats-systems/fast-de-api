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
exports.CreateUserDTO = exports.CreateMobileUserDTO = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateMobileUserDTO = class CreateMobileUserDTO {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], CreateMobileUserDTO.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], CreateMobileUserDTO.prototype, "pin", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'role of the user' }),
    __metadata("design:type", String)
], CreateMobileUserDTO.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'app of the user' }),
    __metadata("design:type", String)
], CreateMobileUserDTO.prototype, "app", void 0);
CreateMobileUserDTO = __decorate([
    (0, graphql_1.InputType)()
], CreateMobileUserDTO);
exports.CreateMobileUserDTO = CreateMobileUserDTO;
let CreateUserDTO = class CreateUserDTO {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'first name of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'first name of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'role of the user' }),
    __metadata("design:type", String)
], CreateUserDTO.prototype, "role", void 0);
CreateUserDTO = __decorate([
    (0, graphql_1.InputType)()
], CreateUserDTO);
exports.CreateUserDTO = CreateUserDTO;
//# sourceMappingURL=create-user.input.js.map