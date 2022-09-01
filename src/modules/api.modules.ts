import { ApiController } from '@controllers/api.controllers';
import { Module } from '@nestjs/common';
import { ApiService } from '@services/api.service';

@Module({
  providers: [ApiService],
  controllers: [ApiController],
})
export class ApiModules {}
