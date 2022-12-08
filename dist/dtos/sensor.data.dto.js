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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSensorDataDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class postSensorDataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234',
        description: 'RasberryPi`s Unique Id',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], postSensorDataDto.prototype, "RPID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'Type of Sensor: 0 or 1 - (Not implemented yet)',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "SensorType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 36.5,
        description: 'Body Temperature',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "BodyTemp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 71.15,
        description: 'Heart beat rate per minute',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "HeartRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 16.5,
        description: 'Breath rate per minute',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "BreathRate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'Motion type - (Not implemented yet)',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "Motion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1111,
        description: 'Heart beat rppg data',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "HeartRate_rppg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1111,
        description: 'Breath rate rppg data',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "BreathRate_rppg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1111,
        description: 'SPO2 data',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], postSensorDataDto.prototype, "SPO2", void 0);
exports.postSensorDataDto = postSensorDataDto;
//# sourceMappingURL=sensor.data.dto.js.map