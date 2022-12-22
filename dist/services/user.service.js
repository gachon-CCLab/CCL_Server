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
    async test() {
        return await this.findOneByAccount('jm');
    }
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
            logger_middleware_1.Logger.info('text');
            return result;
        }
        catch (err) {
            console.log('api 호출 실패');
        }
    }
    async postSensorData(postSensorDataDto) {
        const { RPID, BodyTemp, HeartRate, BreathRate, Motion, HeartRate_rppg, BreathRate_rppg, SPO2 } = postSensorDataDto;
        try {
            const dbPreResult = await database_lib_1.default.query(`SELECT Uid FROM user WHERE RpId = '${RPID}'`);
            if (dbPreResult[0] == undefined) {
                const result = {
                    isSuccess: false,
                    statusCode: 400,
                    message: `There is no user having RPID: ${RPID}`,
                };
                return result;
            }
            const Uid = dbPreResult[0].Uid;
            await database_lib_1.default.query(`INSERT INTO tb_sensor 
        (
          UserId,
          BodyTemp,
          HeartRate,
          BreathRate,
          Motion,
          HeartRate_rppg,
          BreathRate_rppg,
          SPO2
        ) 
        VALUES 
        (
          ${Uid},
          ${BodyTemp},
          ${HeartRate},
          ${BreathRate},
          ${Motion},
          ${HeartRate_rppg},
          ${BreathRate_rppg},
          ${SPO2}
        );`);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: '유저 DB 입력 성공',
            };
            console.log(`Sensor Data sent: Uid = ${Uid}, Rpid = ${RPID}, HeartRate = ${HeartRate}, BodyTemp = ${BodyTemp}`);
            return result;
        }
        catch (err) {
            console.log(`!!!@ Sensor Data sending fail. err message : ${err.message}`);
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: 'failure - Sensor post failed',
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
            const dbUserResult = await database_lib_1.default.query(`SELECT *
        FROM user
        WHERE Uid = ?`, [query.id]);
            delete dbUserResult[0].Password;
            delete dbUserResult[0].DelDate;
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
            console.log(`User ${account} registered`);
            return result;
        }
        catch (err) {
            console.log(`!!!User ${account} filed registered. err Mesage : ${err.message}`);
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err.message,
            };
            return result;
        }
    }
    async postUserRpid(userSendRpidDto) {
        const { Uid, Rpid } = userSendRpidDto;
        try {
            const dbPreResult = await database_lib_1.default.query(`SELECT Uid, Rpid FROM user where Uid = ${Uid} || RpId = "${Rpid}"`);
            if (dbPreResult.length == 0) {
                const result = {
                    isSuccess: false,
                    statusCode: 400,
                    message: `There is no user Uid :  ${Uid}`
                };
                return result;
            }
            for (const i in dbPreResult) {
                if (dbPreResult[i].Rpid == Rpid) {
                    const result = {
                        isSuccess: false,
                        statusCode: 400,
                        message: `RpId ${Rpid} is already used`
                    };
                    return result;
                }
            }
            database_lib_1.default.query(`UPDATE user SET RpId = ${Rpid} WHERE (Uid = ${Uid})`);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: `User's RpId regeistered successfully`,
            };
            console.log(`RPID Wrap completed : UserId - ${Uid}, RpId - ${Rpid}`);
            return result;
        }
        catch (err) {
            console.log(`!!! RPID Wrap failed : UserId - ${Uid}, RpId - ${Rpid}. err message : ${err.message}`);
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err.message,
            };
            return result;
        }
    }
    async userLogin(userLoginDto) {
        const { account, password } = userLoginDto;
        try {
            const dbPreResult = await database_lib_1.default.query(`Select * FROM USER WHERE Account = '${account}'`);
            if (dbPreResult[0] == undefined) {
                const result = {
                    isSuccess: false,
                    statusCode: 400,
                    message: `There is no account : ${account}`,
                };
                return result;
            }
            if (dbPreResult[0].Password != password) {
                const result = {
                    isSuccess: false,
                    statusCode: 400,
                    message: `Check your password again!`,
                };
                return result;
            }
            delete dbPreResult[0].Password;
            console.log(`Account ${account} login success`);
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: `Account ${account} login success`,
                result: dbPreResult[0]
            };
            return result;
        }
        catch (err) {
            console.log(`Account ${account} login failed. Errmessage : ${err.message}`);
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err.message,
            };
            return result;
        }
    }
    async findOneByAccount(account) {
        console.log('findOneAccount 실행. account : ' + account + ' ;;;');
        const dbResult = await database_lib_1.default.query(`SELECT * FROM user WHERE Account = '${account}'`);
        console.log("In FindOneAccount Function : " + dbResult);
        return dbResult;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map