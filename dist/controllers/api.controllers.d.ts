import { ApiService } from '@services/api.service';
import { postSensorDataDto } from 'dtos/sensorData.dto';
export declare class ApiController {
    private ApiService;
    constructor(ApiService: ApiService);
    sayHello(): string;
    selectAllUsers(): Promise<any>;
    createUser(postSensorDataDto: postSensorDataDto): Promise<any>;
    selectAllSenorDate(): Promise<any>;
}
