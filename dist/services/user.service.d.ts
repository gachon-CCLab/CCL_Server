export declare class UserService {
    printHello(): string;
    selectAllUser(): Promise<any>;
    postSensorData(postSensorDataDto: any): Promise<any>;
    selectAllSensorData(): Promise<any>;
    getUserSensorData(query: any): Promise<any>;
    join(JoinRequestDto: any): Promise<any>;
    findOneAccount(account: string): Promise<import("../types/database").DbDefaults>;
}
