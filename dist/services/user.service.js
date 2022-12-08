"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const database_lib_1 = require("../libraries/database.lib");
const logger_middleware_1 = require("../middlewares/logger.middleware");
let UserService = class UserService {
    printHello() {
        this.findOneAccount('jm');
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
            logger_middleware_1.Logger.info('text');
            return result;
        }
        catch (err) {
            console.log('api 호출 실패');
        }
    }
    async postSensorData(postSensorDataDto) {
        const { UserId, SensorData, BodyTemp, HeartRate, BreathRate } = postSensorDataDto;
        try {
            console.log('put sensordata 실행');
            const dbResult = await database_lib_1.default.query(`INSERT INTO tb_sensor (UserId, SensorType, BodyTemp, HeartRate, BreathRate) VALUES (?, ?, ?, ?, ?); `, [
                UserId,
                SensorData,
                BodyTemp,
                HeartRate,
                BreathRate
            ]);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: '유저 DB 입력 성공',
            };
            return result;
        }
        catch (err) {
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: '유저 입력 실패',
                err,
            };
            return result;
        }
    }
    async selectAllSensorData() {
        try {
            const dbResult = await database_lib_1.default.query(`SELECT * FROM tb_sensor`);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: '모든 sensor DB 데이터를 출력합니다.',
                dbResult,
            };
            return result;
        }
        catch (err) {
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: 'api 호출 실패',
            };
            return result;
        }
    }
    async getUserSensorData(query) {
        try {
            const dbUserResult = await database_lib_1.default.query(`SELECT Account, Name, Type, State
        FROM user
        WHERE Uid = ?`, [query.id]);
            const dbSensorResult = await database_lib_1.default.query(`SELECT * FROM tb_sensor WHERE UserId = ?`, [query.id]);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: `${dbUserResult[0].Account} User's Sensor data are imported successfully`,
                result: Object.assign(dbUserResult[0], { sensorData: dbSensorResult })
            };
            return result;
        }
        catch (err) {
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err.message,
            };
            return result;
        }
    }
    async join(JoinRequestDto) {
        const { account, password, name } = JoinRequestDto;
        try {
            const dbPreResult = await database_lib_1.default.query(`SELECT Account FROM user WHERE Account = '${account}'`);
            if (dbPreResult != '') {
                const result = {
                    isSuccess: false,
                    statusCode: 400,
                    message: `User ${dbPreResult[0].Account} is already registered`,
                };
                return result;
            }
            const dbResult = await database_lib_1.default.query(`INSERT INTO user (Account, Password, Name) VALUES(?, ?, ?)`, [account, password, name]);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: `User regeistered successfully`,
            };
            return result;
        }
        catch (err) {
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err.message,
            };
            return result;
        }
    }
    async findOneAccount(account) {
        console.log('findOneAccount 실행. account : ' + account + ' ;;;');
        const dbResult = await database_lib_1.default.query(`SELECT * FROM user WHERE Account = '${account}'`);
        console.log('findOne DBreturn : ' + dbResult[0] + " ;;;");
        return dbResult;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map