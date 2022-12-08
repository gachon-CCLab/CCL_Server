"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const join_request_dto_1 = require("../dtos/join.request.dto");
const common_1 = require("@nestjs/common");
const user_service_1 = require("../services/user.service");
const sensor_data_dto_1 = require("../dtos/sensor.data.dto");
const user_send_rpid_dto_1 = require("../dtos/user.send.rpid.dto");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    sayHello() {
        return this.UserService.printHello();
    }
    selectAllUsers() {
        return this.UserService.selectAllUser();
    }
    postRPID(userSendRpidDto) {
        return this.UserService.postUserRpid(userSendRpidDto);
    }
    createUser(postSensorDataDto) {
        return this.UserService.postSensorData(postSensorDataDto);
    }
    selectAllSenorDate() {
        return this.UserService.selectAllSensorData();
    }
    getUserData(query) {
        return this.UserService.getUserSensorData(query);
    }
    join(JoinRequestDto) {
        return this.UserService.join(JoinRequestDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Testing Server Connectin - It returns "HelloWorld!!"' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "sayHello", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all user`s data from server' }),
    (0, common_1.Get)('/get/allUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "selectAllUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register user`s RPID' }),
    (0, swagger_1.ApiParam)({
        name: 'Rpid',
        description: 'Raspberry Pi ID going to register',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'Uid',
        description: 'User`s Uid',
        required: true,
    }),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/user/RPID'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_send_rpid_dto_1.userSendRpidDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "postRPID", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Send RP sensor data to server vby RP`s unique ID - You need to register user`s RpId first in order to use' }),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiParam)({
        name: 'SPO2',
        description: 'SPO2 data',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'BreathRate_rppg',
        description: 'Breath rate rppg data',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'HeartRate_rppg',
        description: 'Heart beat rppg data',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'Motion',
        description: 'Motion type',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'BreathRate',
        description: 'Breath rate',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'HeartRate',
        description: 'Heart beat Rate',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'BodyTemp',
        description: 'Body temperature',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'SensorType',
        description: 'Type of senosr',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'RPID',
        description: 'RasberryPi`s unique id',
        required: true,
    }),
    (0, common_1.Post)('/post/SensorData'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sensor_data_dto_1.postSensorDataDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all of sensor data server got - Beware of millions of data..' }),
    (0, common_1.Get)('/get/allSensorData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "selectAllSenorDate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get specific user`s data by Uid' }),
    (0, swagger_1.ApiProperty)({
        name: 'id',
        description: 'user`s id',
        required: true,
    }),
    (0, common_1.Get)('/userSensorData/:id'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserData", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register new user!' }),
    (0, swagger_1.ApiParam)({
        name: 'name',
        description: 'User`s real name',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'password',
        description: 'password',
        required: true,
    }),
    (0, swagger_1.ApiParam)({
        name: 'account',
        description: 'User Account(Nickname)',
        required: true,
    }),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/join'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [join_request_dto_1.JoinRequestDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "join", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('USER'),
    (0, common_1.Controller)('modality'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controllers.js.map