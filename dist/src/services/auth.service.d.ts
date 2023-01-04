import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private UserService;
    private JwtService;
    constructor(UserService: UserService, JwtService: JwtService);
    validateUser(account: string, password: string): Promise<any>;
    jwtLogin(LoginDto: any): Promise<(account: string, password: string) => Promise<any>>;
    authTest(LoginDto: any): Promise<any>;
}
