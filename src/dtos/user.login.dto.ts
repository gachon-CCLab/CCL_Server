import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class userLoginDto {

  @ApiProperty({
    example: 'James_0124',
    description: 'User`s account',
    required: true
})
  @IsNotEmpty()
  @IsString()
  account: string;

  @ApiProperty({
    example: '********',
    description: 'Input your password',
    required: true
})
  @IsNotEmpty()
  @IsString()
  password: string;
}