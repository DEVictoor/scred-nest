import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { EmpleadoProviders } from './empleado.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EmpleadosController],
  providers: [EmpleadosService, ...EmpleadoProviders],
  exports: [EmpleadosService],
})
export class EmpleadosModule {}
