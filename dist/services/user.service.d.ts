import { DbDefaults } from 'types/database';
export declare class UserService {
    printHello(): string;
    selectAllUser(): Promise<any>;
    postSensorData(postSensorDataDto: any): Promise<any>;
    selectAllSensorData(): Promise<any>;
    getUserSensorData(query: any): Promise<any>;
    join(JoinRequestDto: any): Promise<any>;
    postUserRpid(userSendRpidDto: any): Promise<any>;
    findOneAccount(account: string): Promise<DbDefaults>;
}
