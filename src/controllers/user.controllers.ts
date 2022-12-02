import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '@services/user.service';
import { postSensorDataDto } from 'dtos/sensorData.dto';

@Controller('modality')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get()
  sayHello(): string {
    return this.UserService.printHello();
  }

  @Get('/get/allUser')
  selectAllUsers() {
    return this.UserService.selectAllUser();
  }

  @UsePipes(ValidationPipe)
  @Post('/post/SensorData')
  createUser(
    @Body() postSensorDataDto : postSensorDataDto
  ) {
    return this.UserService.postSensorData(postSensorDataDto);
  }

  @Get('/get/allSensorData')
  selectAllSenorDate() {
    return this.UserService.selectAllSensorData();
  }

  @Get('/userSensorData/:id')
  getUserData(@Query() query) {
    return this.UserService.getUserSensorData(query);
  }
}
