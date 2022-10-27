import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiService } from '@services/api.service';
import { postSensorDataDto } from 'dtos/sensorData.dto';

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

  @UsePipes(ValidationPipe)
  @Post('/post/SensorData')
  createUser(
    @Body() postSensorDataDto : postSensorDataDto
  ) {
    return this.ApiService.postSensorData(postSensorDataDto);
  }

  @Get('/get/allSensorData')
  selectAllSenorDate() {
    return this.ApiService.selectAllSensorData();
  }
}
