import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserModule } from '../modules/user.module';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './auth.strategies/local.strategy';

@Module({
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
