import { JoinRequestDto } from '@controllers/dtos/user.dtos/join.request.dto';
import { UserService } from '@services/user.service';
import { postSensorDataDto } from '@controllers/dtos/user.dtos/sensor.data.dto';
import { userSendRpidDto } from '@controllers/dtos/user.dtos/user.send.rpid.dto';
import { LoginDto } from './dtos/auth.dtos/login.dto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    test(): any;
    sayHello(): string;
    selectAllUsers(): Promise<any>;
    postRPID(userSendRpidDto: userSendRpidDto): Promise<any>;
    createUser(postSensorDataDto: postSensorDataDto): Promise<any>;
    selectAllSenorDate(): Promise<any>;
    getUserData(query: any): Promise<any>;
    join(JoinRequestDto: JoinRequestDto): Promise<any>;
    userLogin(userLoginDto: LoginDto): Promise<any>;
}
