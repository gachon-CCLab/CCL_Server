import { IsNotEmpty, IsNumber } from "class-validator";

export class postSensorDataDto {
    @IsNotEmpty()
    @IsNumber()
    UserId: number;

    @IsNotEmpty()
    @IsNumber()
    SensorType: number;

    @IsNotEmpty()
    @IsNumber()
    BodyTemp: number;

    @IsNotEmpty()
    @IsNumber()
    HeartRate: number;

    @IsNotEmpty()
    @IsNumber()
    BreathRate: number;
}