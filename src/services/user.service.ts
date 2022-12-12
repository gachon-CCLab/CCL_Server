import { Body, Injectable } from '@nestjs/common';
import Database from '@libraries/database.lib';
import { Logger } from '@middlewares/logger.middleware';
import bcrypt from 'bcrypt';
import { DbDefaults } from 'types/database';

@Injectable()
export class UserService {
  public printHello(): string {
    this.findOneAccount('jm');
    return 'HelloWorld!';
  }

  // ------------------------------------- 모든 유저 DB 데이터 출력 api ----------------------------------------
  public async selectAllUser(): Promise<any> {
    try {
      const dbResult: any = await Database.query(`SELECT * FROM USER`);
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: '모든 유저 DB 데이터를 출력합니다.',
        dbResult,
      };
      Logger.info('text');
      return result;
    } catch (err: any) {
      console.log('api 호출 실패');
    }
  }
  // ===================================== 모든 유저 DB 데이터 출력 api 끝 =======================================

  // ------------------------------------- 센서 데이터 DB 입력 api -----------------------------------------------
  public async postSensorData(postSensorDataDto) {
    const { RPID, BodyTemp, HeartRate, BreathRate, Motion, HeartRate_rppg, BreathRate_rppg, SPO2 } = postSensorDataDto;
    try {
      const dbPreResult: DbDefaults = await Database.query(`SELECT Uid FROM user WHERE RpId = '${RPID}'`);
      if (dbPreResult[0] == undefined) {
        const result: any = {
          isSuccess: false,
          statusCode: 400,
          message: `There is no user having RPID: ${RPID}`,
        };
        return result;
      }

      const Uid = dbPreResult[0].Uid

      await Database.query(
        `INSERT INTO tb_sensor 
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
        );`
      );
      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: '유저 DB 입력 성공',
      };
      console.log(`Sensor Data sent: Uid = ${Uid}, Rpid = ${RPID}, HeartRate = ${HeartRate}, BodyTemp = ${BodyTemp}`);
      return result;
    } catch (err: any) {
      console.log(`!!!@ Sensor Data sending fail. err message : ${err.message}`);
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: 'failure - Sensor post failed',
        err,
      };
      return result;
    }
  }
  // ===================================== 센서 데이터 DB 입력 api 끝 ============================================

  // ------------------------------------- 모든 센서 DB 데이터 출력 api --------------------------------------------
  public async selectAllSensorData() {
    try {
      const dbResult: any = await Database.query(`SELECT * FROM tb_sensor`);
      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: '모든 sensor DB 데이터를 출력합니다.',
        dbResult,
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: 'api 호출 실패',
      };
      return result;
    }
  }

  // ------------------------------------- 특정 유저 센서 데이터 출력 api --------------------------------------------
  public async getUserSensorData(query) {
    try {
      const dbUserResult: any = await Database.query(
        // `SELECT * 
        // FROM user
        // JOIN tb_sensor on tb_sensor.UserId = user.Uid
        // WHERE user.Uid = `,
        // [query.id]
        
        `SELECT Account, Name, Type, State
        FROM user
        WHERE Uid = ?`,
        [query.id]
      );

      const dbSensorResult: any = await Database.query(
        `SELECT * FROM tb_sensor WHERE UserId = ?`,
        [query.id]
      );



      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: `${dbUserResult[0].Account} User's Sensor data are imported successfully`,
        result: Object.assign(dbUserResult[0],{sensorData: dbSensorResult})
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: err.message,
      };
      return result;
    }
  }
  // ===================================== 특정 유저 DB 데이터 출력 api 끝 ============================================

  // ===================================== 회원가입 API ================================================
  public async join(JoinRequestDto) {
    const { account, password, name } = JoinRequestDto;
    
    try {
      const dbPreResult: any = await Database.query(`SELECT Account FROM user WHERE Account = '${account}'`);
      if (dbPreResult !='') {
        const result: any = {
          isSuccess: false,
          statusCode: 400,
          message: `User ${dbPreResult[0].Account} is already registered`,
        };
        return result;
      }
      // const hashPassword = await bcrypt.hash(password, 12);
      const dbResult: any = await Database.query(`INSERT INTO user (Account, Password, Name) VALUES(?, ?, ?)`, [account, password, name]);
      
      const result: any = {
          isSuccess: true,
          statusCode: 200,
          message: `User regeistered successfully`,
        };
        console.log(`User ${account} registered`);
        return result;
      }
    catch (err: any) {
      console.log(`!!!User ${account} filed registered. err Mesage : ${err.message}`);
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: err.message,
      };
      return result;
    }
  }
  // ------------------------------------- 회원가입 api 끝 --------------------------------------------


  // ===================================== 유저 Rpid 등록 api ================================================
  public async postUserRpid(userSendRpidDto) {
    const { Uid, Rpid } = userSendRpidDto;

    try {
      await Database.query(`UPDATE user SET RpId = ${Rpid} WHERE (Uid = ${Uid})`);

      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: `User's RpId regeistered successfully`,
      };
      console.log(`RPID Wrap completed : UserId - ${Uid}, RpId - ${Rpid}`);
      return result;
    }
    catch (err: any) {
      console.log(`!!! RPID Wrap failed : UserId - ${Uid}, RpId - ${Rpid}. err message : ${err.message}`);
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: err.message,
      };
      return result;
    }
  }

  // ------------------------------------- 유저 Rpid 등록 api 끝 --------------------------------------------

   // ===================================== 유저 login api ================================================
   public async userLogin(userLoginDto) {
    const { account, password} = userLoginDto;

    try {
      const dbPreResult = await Database.query(`Select * FROM USER WHERE Account = '${account}'`);
      if (dbPreResult[0] == undefined) {
        const result: any = {
          isSuccess: false,
          statusCode: 400,
          message: `There is no account : ${account}`,
        };
        return result;
      }
      if (dbPreResult[0].Password != password) {
        const result: any = {
          isSuccess: false,
          statusCode: 400,
          message: `Check your password again!`,
        };
        return result;
      }

      delete dbPreResult[0].Password;
      console.log(`Account ${account} login success`);
      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: `Account ${account} login success`,
        result: dbPreResult[0]
      };
      return result;
    }
    catch (err) {
      console.log(`Account ${account} login failed. Errmessage : ${err.message}`);
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: err.message,
      };
      return result;
    }
  }

  // ------------------------------------- 유저 login api 끝 --------------------------------------------

  public async findOneAccount(account: string) {
    console.log('findOneAccount 실행. account : '+ account +' ;;;');
    const dbResult = await Database.query(`SELECT * FROM user WHERE Account = '${account}'`);
    console.log('findOne DBreturn : ' + dbResult[0] + " ;;;");
    // let result: Array<string> = [];
    // if(dbResult[0] != undefined) {
    //   result = [dbResult[0].Account, dbResult[0].Password];
    // }
    // else {
    //   result = null;
    // }
    // console.log('findOneResult : ' + result);
    return dbResult;
  }
}
