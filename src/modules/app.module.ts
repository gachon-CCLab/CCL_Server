import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModules } from './user.module';

@Module({
  imports: [ApiModules, ConfigModule.forRoot()],
})
export class AppModule {}
