import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from '@services/api.service';

@Controller('modality')
export class ApiController {
  constructor(private ApiService: ApiService) {}

  @Get()
  sayHello(): string {
    return this.ApiService.printHello();
  }

  @Get('/get/allUser')
  selectAllUsers() {
    return this.ApiService.selectAllUser();
  }

  @Post('/post/SensorData')
  createUser(@Body() body) {
    return this.ApiService.postSensorData(body);
  }

  @Get('/get/allSensorData')
  selectAllSenorDate() {
    return this.ApiService.selectAllSensorData();
  }
}
