import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModules } from './api.modules';

@Module({
  imports: [ApiModules, ConfigModule.forRoot()],
})
export class AppModule {}
