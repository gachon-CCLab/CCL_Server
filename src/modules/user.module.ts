import { UserController } from '@controllers/user.controllers';
import { Module } from '@nestjs/common';
import { UserService } from '@services/user.service';

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
