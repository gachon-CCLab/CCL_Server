import { AuthService } from "@services/auth.service";
import { LoginDto } from "./dtos/auth.dtos/login.dto";
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    jwtLogin(LoginDto: LoginDto): Promise<{
        acess_token: string;
    }>;
}