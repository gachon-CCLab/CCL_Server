import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
export declare class AuthService {
    private UserService;
    private JwtService;
    constructor(UserService: UserService, JwtService: JwtService);
    validateUser(account: string, password: string): Promise<any>;
    jwtLogin(LoginDto: any): Promise<{
        acess_token: string;
    }>;
}
