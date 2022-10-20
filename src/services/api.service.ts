import { Injectable } from '@nestjs/common';
import Database from '@libraries/database.lib';

@Injectable()
export class ApiService {
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
      return result;
    } catch (err: any) {
      console.log('api 호출 실패');
    }
  }
  // ======================================= 모든 유저 DB 데이터 출력 api 끝 ============================================

  // ------------------------------------- 센서 데이터 DB 입력 api --------------------------------------------
  public async postSensorData(body) {
    const Body: any = body;
    try {
      const dbResult: any = await Database.query(
        `INSERT INTO tb_sensor (UserId, SensorType, BodyTemp, HeartRate, BreathRate) VALUES (?, ?, ?, ?, ?); `,
        [
          Body.UserId,
          Body.SensorType,
          Body.BodyTemp,
          Body.HeartRate,
          Body.BreathRate,
        ],
      );
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: '유저 DB 입력 성공',
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        stateCode: 400,
        message: '유저 입력 실패',
        err,
      };
      return result;
    }
  }
  // ===================================== 센서 데이터 DB 입력 api ============================================

  // ------------------------------------- 모든 센서 DB 데이터 출력 api --------------------------------------------
  public async selectAllSensorData() {
    try {
      const dbResult: any = await Database.query(`SELECT * FROM tb_sensor`);
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: '모든 sensor DB 데이터를 출력합니다.',
        dbResult,
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        stateCode: 400,
        message: 'api 호출 실패',
      };
      return result;
    }
  }
  // ===================================== 모든 센서 DB 데이터 출력 api 끝 ============================================
}
