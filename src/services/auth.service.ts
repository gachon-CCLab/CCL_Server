import Database from '@libraries/database.lib';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { throwError } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private JwtService: JwtService,
  ) {}

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Validater User 메서드 @@@@@@@@@@@@@@@@@@@@@@@@@@@@
  async validateUser(account: string, password: string): Promise<any> {
    console.log('AuthService - validateUser 실행');
    let userData: any = await this.UserService.findOneByAccount(account);

    if(userData == null) {
      console.log('null');
      throw new BadRequestException('There is no account ' + account);
    }

    if ( account == userData[0].Account && password == userData[0].Password ) {
      const { Password, ...result} = userData[0];
      const accessToken = await this.JwtService.sign(result);
      result['token'] = accessToken;
      return result;
    } 
    else{
      throw new UnauthorizedException('Cannot login - Please check your ID and Password');
    }
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Validate User 메서드 끝 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // ===================================== JWT login api ================================================
  async jwtLogin(LoginDto) {
    console.log('AuthService - jwtLogin 실행');
    const {account, password} = LoginDto;

    return await this.validateUser(account, password);
  }

  // ------------------------------------- JWT login api 끝 --------------------------------------------

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
