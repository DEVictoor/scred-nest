import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './users.providers';
import { IsUsernameUserRegistered } from './decorators/IsUsernameUserRegistered.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [IsUsernameUserRegistered, UsersService, ...UserProviders],
  exports: [UsersService],
})
export class UsersModule {}
