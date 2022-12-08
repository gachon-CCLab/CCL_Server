import { JoinRequestDto } from '@dtos/join.request.dto';
import { UserService } from '@services/user.service';
import { postSensorDataDto } from '@dtos/sensor.data.dto';
import { userSendRpidDto } from '@dtos/user.send.rpid.dto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    sayHello(): string;
    selectAllUsers(): Promise<any>;
    postRPID(userSendRpidDto: userSendRpidDto): Promise<any>;
    createUser(postSensorDataDto: postSensorDataDto): Promise<any>;
    selectAllSenorDate(): Promise<any>;
    getUserData(query: any): Promise<any>;
    join(JoinRequestDto: JoinRequestDto): Promise<any>;
}
