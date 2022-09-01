import { Injectable } from '@nestjs/common';
import Database from '@libraries/database.lib';

@Injectable()
export class ApiService {
  public printHello(): string {
    return 'HelloWorld!';
  }

  public async selectAllUser(): Promise<any> {
    try {
      const dbResult: any = await Database.query(`SELECT * FROM USER`);
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: '모든 유저 DB 데이터를 출력합니다.',
        dbResult,
      };
      return dbResult;
    } catch (err: any) {
      console.log('api 호출 실패');
    }
  }
}
