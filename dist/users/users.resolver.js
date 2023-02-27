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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./entities/user.entity");
const create_user_input_1 = require("./dto/create-user.input");
const update_user_input_1 = require("./dto/update-user.input");
const logged_user_output_1 = require("./dto/logged-user.output");
const login_user_input_1 = require("./dto/login-user.input");
const user_profile_input_1 = require("./dto/user-profile.input");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createMobileUserDTO) {
        return this.usersService.create(createMobileUserDTO);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(userId) {
        return this.usersService.findOne(userId);
    }
    getUserProfile(userProfileInput) {
        console.log('getUserProfile token');
        console.log(userProfileInput);
        return this.usersService.getUserProfile(userProfileInput.token);
    }
    updateUser(updateUserInput) {
        return this.usersService.update(updateUserInput.userId, updateUserInput);
    }
    removeUser(userId) {
        return this.usersService.remove(userId);
    }
    loginUser(loginUserDTO) {
        return this.usersService.loginUser(loginUserDTO);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('createMobileUserDTO')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateMobileUserDTO]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_entity_1.User], { name: 'users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'getUser' }),
    __param(0, (0, graphql_1.Args)('userId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => user_entity_1.User, { name: 'getUserProfile' }),
    __param(0, (0, graphql_1.Args)('userProfileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_profile_input_1.UserProfileInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "getUserProfile", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_entity_1.User),
    __param(0, (0, graphql_1.Args)('userId', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "removeUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => logged_user_output_1.LoggedUserOutput),
    __param(0, (0, graphql_1.Args)('loginUserDTO')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_input_1.LoginUserDTO]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "loginUser", null);
UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.User),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map