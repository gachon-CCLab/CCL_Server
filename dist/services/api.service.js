"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const common_1 = require("@nestjs/common");
const database_lib_1 = require("../libraries/database.lib");
let ApiService = class ApiService {
    printHello() {
        return 'HelloWorld!';
    }
    async selectAllUser() {
        try {
            const dbResult = await database_lib_1.default.query(`SELECT * FROM USER`);
            const result = {
                isSuccess: true,
                stateCode: 200,
                message: '모든 유저 DB 데이터를 출력합니다.',
                dbResult,
            };
            return dbResult;
        }
        catch (err) {
            console.log('api 호출 실패');
        }
    }
};
ApiService = __decorate([
    (0, common_1.Injectable)()
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map