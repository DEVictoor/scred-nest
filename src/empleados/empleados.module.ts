import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { EmpleadoProviders } from './empleado.providers';
import { DatabaseModule } from 'src/database/database.module';
import { IsIdPersonNotRegistered } from 'src/person/decorators/uuid-not-registered.decorator';
import { PersonModule } from 'src/person/person.module';
import { IsIdRoleNotRegistered } from 'src/roles/decorators/idnotregistered.decorator';
import { RolesModule } from 'src/roles/roles.module';
import { IsIdCajaRegistered } from 'src/cajas/decorators/IsIdCajaRegistered.decorator';
import { CajasModule } from 'src/cajas/cajas.module';

@Module({
  imports: [DatabaseModule, PersonModule, RolesModule, CajasModule],
  controllers: [EmpleadosController],
  providers: [
    IsIdPersonNotRegistered,
    IsIdCajaRegistered,
    IsIdRoleNotRegistered,
    EmpleadosService,
    ...EmpleadoProviders,
  ],
  exports: [EmpleadosService],
})
export class EmpleadosModule {}
