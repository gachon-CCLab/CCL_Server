import { AuthService } from "@services/auth.service";
import { LoginDto } from "./dtos/auth.dtos/login.dto";
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    jwtLogin(LoginDto: LoginDto): Promise<(account: string, password: string) => Promise<any>>;
    authTest(LoginDto: LoginDto): Promise<any>;
}
