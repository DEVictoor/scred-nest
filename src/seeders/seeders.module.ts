import { Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { SeedersController } from './seeders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PersonModule } from 'src/person/person.module';
import { UsersModule } from 'src/users/users.module';
import { EmpleadosModule } from 'src/empleados/empleados.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    DatabaseModule,
    PersonModule,
    UsersModule,
    EmpleadosModule,
    RolesModule,
  ],
  controllers: [SeedersController],
  providers: [SeedersService],
  exports: [SeedersService],
})
export class SeedersModule {}
