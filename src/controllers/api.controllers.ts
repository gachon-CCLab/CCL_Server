import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@services/api.service';

@Controller('api')
export class ApiController {
  constructor(private ApiService: ApiService) {}

  @Get()
  sayHello(): string {
    return this.ApiService.printHello();
  }

  @Get('/allUser')
  selectAllUsers() {
    return this.ApiService.selectAllUser();
  }
}
