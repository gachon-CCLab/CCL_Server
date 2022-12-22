import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private JwtService: JwtService,
  ) {}

  async validateUser(account: string, password: string): Promise<any> {
    console.log('AuthService - validateUser 실행');
    let userData = await this.UserService.findOneByAccount(account);
    console.log('ValodatorUserResult :');
    console.log(userData);

    return null;
  }

  async jwtLogin(LoginDto) {
    console.log('AuthService - jwtLogin 실행');
    const payload = { account: LoginDto.account, password: LoginDto.password};
    console.log(payload);
    console.log('실행');
    return {
      acess_token: this.JwtService.sign(payload),
    }
  }
}
