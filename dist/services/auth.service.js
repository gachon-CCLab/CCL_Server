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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
let AuthService = class AuthService {
    constructor(UserService, JwtService) {
        this.UserService = UserService;
        this.JwtService = JwtService;
    }
    async validateUser(account, password) {
        console.log('AuthService - validateUser 실행');
        let userData = await this.UserService.findOneByAccount(account);
        console.log('ValodatorUserResult :');
        console.log(userData);
        return null;
    }
    async jwtLogin(LoginDto) {
        console.log('AuthService - jwtLogin 실행');
        const payload = { account: LoginDto.account, password: LoginDto.password };
        console.log(payload);
        console.log('실행');
        return {
            acess_token: this.JwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map