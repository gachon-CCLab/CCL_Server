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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const database_lib_1 = require("../libraries/database.lib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const rxjs_1 = require("rxjs");
const user_service_1 = require("./user.service");
let AuthService = class AuthService {
    constructor(UserService, JwtService) {
        this.UserService = UserService;
        this.JwtService = JwtService;
    }
    async validateUser(account, password) {
        console.log('AuthService - validateUser 실행');
        let userData = await this.UserService.findOneByAccount(account);
        if (userData == null) {
            console.log('null');
            throw new common_1.BadRequestException('There is no account ' + account);
        }
        if (account == userData[0].Account && password == userData[0].Password) {
            const _a = userData[0], { Password } = _a, result = __rest(_a, ["Password"]);
            const accessToken = await this.JwtService.sign(result);
            result['token'] = accessToken;
            return result;
        }
        else {
            throw new common_1.UnauthorizedException('Cannot login - Please check your ID and Password');
        }
    }
    async jwtLogin(LoginDto) {
        console.log('AuthService - jwtLogin 실행');
        const { account, password } = LoginDto;
        return await this.validateUser(account, password);
    }
    async authTest(LoginDto) {
        console.log('authTest 실행');
        const { account, Password } = LoginDto;
        const dbResult = await database_lib_1.default.query(`SELECT * FROM user WHERE Account = "${account}"`);
        if (dbResult[0] != undefined) {
            delete dbResult[0].Password;
            return dbResult[0];
        }
        else {
            rxjs_1.throwError;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map