import { UserService } from './user.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    validateUser(account: string, password: string): Promise<any>;
}
