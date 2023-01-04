import Database from '@libraries/database.lib';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import e from 'express';
import { throwError } from 'rxjs';
import { resourceLimits } from 'worker_threads';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private JwtService: JwtService,
  ) {}

  async validateUser(account: string, password: string): Promise<any> {
    console.log('AuthService - validateUser 실행');
    let userData: any = await this.UserService.findOneByAccount(account);
    console.log('ValodatorUserResult :');
    console.log(userData);

    if ( userData.account && userData.password == password ) {
      const { password, ...result} = userData;
      const accessToken = await this.JwtService.sign(result);
      result['token'] = accessToken;
      return result;
    }
    return null;
  }

  async jwtLogin(LoginDto) {
    console.log('AuthService - jwtLogin 실행');
    const { account, password } = LoginDto;
    console.log("account = " + account);
    console.log('password = ' + password);

    return this.validateUser;
  }

  async authTest(LoginDto) {
    console.log('authTest 실행');
    const { account, Password } = LoginDto

    const dbResult = await Database.query(`SELECT * FROM user WHERE Account = "${account}"`);
    if (dbResult[0] != undefined) {
      delete dbResult[0].Password;
      return dbResult[0];
    }
    else {
      throwError;
    }
  }
}
