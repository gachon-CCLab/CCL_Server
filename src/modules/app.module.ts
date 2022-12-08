import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
})
export class AppModule {}
