import { Injectable } from '@nestjs/common';
import Database from '@libraries/database.lib';
import { Logger } from '@middlewares/logger.middleware';
import { constants } from 'buffer';

@Injectable()
export class UserService {
  public printHello(): string {
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
    const { UserId, SensorData, BodyTemp, HeartRate, BreathRate } = postSensorDataDto;

    try {
      console.log('put sensordata 실행');
      const dbResult: any = await Database.query(
        `INSERT INTO tb_sensor (UserId, SensorType, BodyTemp, HeartRate, BreathRate) VALUES (?, ?, ?, ?, ?); `,
        [
          UserId,
          SensorData,
          BodyTemp,
          HeartRate,
          BreathRate
        ],
      );
      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: '유저 DB 입력 성공',
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: '유저 입력 실패',
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
}
