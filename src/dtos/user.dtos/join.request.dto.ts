import { ApiProperty } from "@nestjs/swagger";
import { Equals, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class JoinRequestDto {
    @ApiProperty({
        example: 'Willi',
        description: 'NickName of User',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    account:string;

    @ApiProperty({
        example: '1111',
        description: 'password (not hashed yet)',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    password:string;

    @ApiProperty({
        example: 'William',
        description: 'User`s real name',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name:string;
}
