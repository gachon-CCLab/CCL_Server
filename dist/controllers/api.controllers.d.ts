import { ApiService } from '@services/api.service';
export declare class ApiController {
    private ApiService;
    constructor(ApiService: ApiService);
    sayHello(): string;
    selectAllUsers(): Promise<any>;
}
