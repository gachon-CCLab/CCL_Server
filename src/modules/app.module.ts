import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModules } from './api.module';

@Module({
  imports: [ApiModules, ConfigModule.forRoot()],
})
export class AppModule {}
