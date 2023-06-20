import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RolesProviders } from './roles.providers';
import { IsNombreRegistered } from './decorators/nombre.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [RolesController],
  providers: [RolesService, IsNombreRegistered, ...RolesProviders],
  exports: [RolesService],
})
export class RolesModule {}
