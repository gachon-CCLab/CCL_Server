import { UserService } from '@services/user.service';
import { postSensorDataDto } from 'dtos/sensorData.dto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    sayHello(): string;
    selectAllUsers(): Promise<any>;
    createUser(postSensorDataDto: postSensorDataDto): Promise<any>;
    selectAllSenorDate(): Promise<any>;
    getUserData(query: any): Promise<any>;
}
