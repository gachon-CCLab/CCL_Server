import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { PassportModule } from '@nestjs/passport/dist';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth.strategies/jwt.auth.strategy';
import { AuthController } from '@controllers/auth.controller';
import { UserService } from '@services/user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET_KEY'),
        // @@@@@@ Setting @@@@@@@ Token 만료 시간
        signOptions: {expiresIn: `3600s`}
      })
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
