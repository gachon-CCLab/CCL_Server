import { JoinRequestDto } from '@dtos/join.request.dto';
import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '@services/user.service';

import { postSensorDataDto } from '@dtos/sensor.data.dto';
import { userSendRpidDto } from '@dtos/user.send.rpid.dto';
import { userLoginDto } from '@dtos/user.login.dto';
import { ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('USER')
@Controller('modality')
export class UserController {
  constructor(private UserService: UserService) {}

  // =======================================================================================
  @ApiOperation({ summary: 'Testing Server Connectin - It returns "HelloWorld!!"' })
  @Get()
  sayHello(): string {
    return this.UserService.printHello();
  }

  // =======================================================================================
  @ApiOperation({ summary: 'Get all user`s data from server' })
  @Get('/get/allUser')
  selectAllUsers() {
    return this.UserService.selectAllUser();
  }

  // =======================================================================================
  @ApiOperation({ summary: 'Register user`s RPID' })
  @ApiParam({
    name: 'Rpid',
    description: 'Raspberry Pi ID going to register',
    required: true,
  })
  @ApiParam({
    name: 'Uid',
    description: 'User`s Uid',
    required: true,
  })
  @UsePipes(ValidationPipe)
  @Post('/user/RPID')
  postRPID(@Body() userSendRpidDto: userSendRpidDto) {
    return this.UserService.postUserRpid(userSendRpidDto);
  }  

  // =======================================================================================
  @ApiOperation({ summary: 'Send RP sensor data to server vby RP`s unique ID - You need to register user`s RpId first in order to use' })
  @UsePipes(ValidationPipe)
  @ApiParam({
    name: 'SPO2',
    description: 'SPO2 data',
    required: true,
  })
  @ApiParam({
    name: 'BreathRate_rppg',
    description: 'Breath rate rppg data',
    required: true,
  })
  @ApiParam({
    name: 'HeartRate_rppg',
    description: 'Heart beat rppg data',
    required: true,
  })
  @ApiParam({
    name: 'Motion',
    description: 'Motion type',
    required: true,
  })
  @ApiParam({
    name: 'BreathRate',
    description: 'Breath rate',
    required: true,
  })
  @ApiParam({
    name: 'HeartRate',
    description: 'Heart beat Rate',
    required: true,
  })
  @ApiParam({
    name: 'BodyTemp',
    description: 'Body temperature',
    required: true,
  })
  @ApiParam({
    name: 'SensorType',
    description: 'Type of senosr',
    required: true,
  })
  @ApiParam({
    name: 'RPID',
    description: 'RasberryPi`s unique id',
    required: true,
  })

  @Post('/post/SensorData')
  createUser(@Body() postSensorDataDto : postSensorDataDto) {
    return this.UserService.postSensorData(postSensorDataDto);
  }

  // =======================================================================================
  @ApiOperation({ summary: 'Get all of sensor data server got - Beware of millions of data..' })
  @Get('/get/allSensorData')
  selectAllSenorDate() {
    return this.UserService.selectAllSensorData();
  }

  // =======================================================================================
  @ApiOperation({ summary: 'Get specific user`s data by Uid' })
  @ApiProperty({
    name: 'id',
    description: 'user`s id',
    required: true,
  })
  @Get('/userSensorData/:id')
  getUserData(@Query() query) {
    return this.UserService.getUserSensorData(query);
  }

  // =======================================================================================
  @ApiOperation({ summary: 'Register new user!' })
  @ApiParam({
    name: 'name',
    description: 'User`s real name',
    required: true,
  })  
  @ApiParam({
    name: 'password',
    description: 'password',
    required: true,
  })  
  @ApiParam({
    name: 'account',
    description: 'User Account(Nickname)',
    required: true,
  })  
  @UsePipes(ValidationPipe)
  @Post('/join')
  join(@Body() JoinRequestDto: JoinRequestDto) {
    return this.UserService.join(JoinRequestDto);
  }

  // =======================================================================================
  @ApiParam({
    name: 'account',
    description: 'User`s account',
    example: 'james_0124',
    required: true,
  })  
  @ApiParam({
    name: 'password',
    description: 'password',
    example: '********',
    required: true,
  })  
  @UsePipes(ValidationPipe)
  @Post('/login')
  userLogin(@Body()  userLoginDto : userLoginDto) {
    return this.UserService.userLogin((userLoginDto));
  }
}
