import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class postSensorDataDto {
    // @IsNotEmpty()
    // @IsNumber()
    // UserId: number;

    @ApiProperty({
        example: '1234',
        description: 'RasberryPi`s Unique Id',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    RPID: string;

    @ApiProperty({
        example: 0,
        description: 'Type of Sensor: 0 or 1 - (Not implemented yet)',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    SensorType: number;

    @ApiProperty({
        example: 36.5,
        description: 'Body Temperature',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    BodyTemp: number;

    @ApiProperty({
        example: 71.15,
        description: 'Heart beat rate per minute',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    HeartRate: number;

    @ApiProperty({
        example: 16.5,
        description: 'Breath rate per minute',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    BreathRate: number;

    @ApiProperty({
        example: 0,
        description: 'Motion type - (Not implemented yet)',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    Motion: number;

    @ApiProperty({
        example: 1111,
        description: 'Heart beat rppg data',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    HeartRate_rppg: number;

    @ApiProperty({
        example: 1111,
        description: 'Breath rate rppg data',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    BreathRate_rppg: number;

    @ApiProperty({
        example: 1111,
        description: 'SPO2 data',
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    SPO2: number;
}