import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    UserModule,
    AuthModule
  ],
})
export class AppModule {}
