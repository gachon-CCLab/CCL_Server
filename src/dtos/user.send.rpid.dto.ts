import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class userSendRpidDto {

  @ApiProperty({
    example: 1,
    description: 'User`s id - Not a Account!',
    required: true
})
  @IsNotEmpty()
  @IsNumber()
  Uid: number;

  @ApiProperty({
    example: "1335",
    description: 'RPID that user regester',
    required: true
})
  @IsNotEmpty()
  @IsString()
  Rpid: string;
}