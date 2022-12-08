import { Equals, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class JoinRequestDto {
    @IsNotEmpty()
    @IsString()
    account:number;

    @IsNotEmpty()
    @IsString()
    password:string;

    @IsNotEmpty()
    @IsString()
    name:string;
}
