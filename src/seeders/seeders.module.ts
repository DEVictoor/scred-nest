import { Module } from '@nestjs/common';
import { SeedersService } from './seeders.service';
import { SeedersController } from './seeders.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PersonModule } from 'src/person/person.module';
import { UsersModule } from 'src/users/users.module';
import { EmpleadosModule } from 'src/empleados/empleados.module';
import { RolesModule } from 'src/roles/roles.module';
import { MonedasModule } from 'src/monedas/monedas.module';
import { AgenciasModule } from 'src/agencias/agencias.module';
import { CajasModule } from 'src/cajas/cajas.module';

@Module({
  imports: [
    DatabaseModule,
    PersonModule,
    UsersModule,
    EmpleadosModule,
    RolesModule,
    MonedasModule,
    AgenciasModule,
    CajasModule,
  ],
  controllers: [SeedersController],
  providers: [SeedersService],
  exports: [SeedersService],
})
export class SeedersModule {}
