import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(account: string, password: string): Promise<any> {
    const dbData = await this.usersService.findOneAccount(account);
    let result = dbData[0];
    console.log('ValodatorUserResult : ' + result + ' ;;;');
    if(result != undefined && result.Password == password) {
      return result;
    }
    // if (account == dbData[account] && password == dbData[Password])

    // if (user && user.password === password) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null;
  }
}
