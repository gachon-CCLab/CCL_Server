export declare class UserService {
    printHello(): string;
    selectAllUser(): Promise<any>;
    postSensorData(postSensorDataDto: any): Promise<any>;
    selectAllSensorData(): Promise<any>;
    getUserSensorData(query: any): Promise<any>;
}
