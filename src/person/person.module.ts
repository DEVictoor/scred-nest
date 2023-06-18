import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PersonProviders } from './person.providers';
import { DatabaseModule } from 'src/database/database.module';
import {
  DniNotRegistered,
  IsDniNotRegistered,
} from './decorators/dni-not-registered.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [IsDniNotRegistered, PersonService, ...PersonProviders],
  exports: [PersonService],
})
export class PersonModule {}
