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
exports.UpdateUserInput = void 0;
const create_user_input_1 = require("./create-user.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateUserInput = class UpdateUserInput extends (0, graphql_1.PartialType)(create_user_input_1.CreateMobileUserDTO) {
};
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'id of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'first name of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'last name of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'phone of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'password of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { description: 'role of the user' }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "role", void 0);
UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=update-user.input.js.map