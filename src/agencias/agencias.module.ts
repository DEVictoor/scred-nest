import { Module } from '@nestjs/common';
import { AgenciasService } from './agencias.service';
import { AgenciasController } from './agencias.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AgenciaProviders } from './agencia.providers';
import { IsNombreAgenciaRegistered } from './decorators/IsNombreAgenciaRegistered.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [AgenciasController],
  providers: [AgenciasService, IsNombreAgenciaRegistered, ...AgenciaProviders],
  exports: [AgenciasService],
})
export class AgenciasModule {}
