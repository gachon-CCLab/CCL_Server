import { JwtAuthGuard } from "@guards/jwt.auth.guard";
import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "@services/auth.service";
import { LoginDto } from "./dtos/auth.dtos/login.dto";


@Controller('modality/auth')
export class AuthController {
  constructor(private AuthService : AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/jwt/login')
  async jwtLogin(@Body() LoginDto: LoginDto) {
    console.log('AuthController - jwtLogin 실행');
    return this.AuthService.jwtLogin(LoginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/test')
  async authTest (@Body() LoginDto: LoginDto) {
    return this.AuthService.authTest(LoginDto)
  }
}