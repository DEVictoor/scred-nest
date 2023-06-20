import { Module } from '@nestjs/common';
import { CajasService } from './cajas.service';
import { CajasController } from './cajas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CajasProviders } from './cajas.providers';
import { IsNombreCajaRegistered } from './decorators/IsNombreCajaRegistered.decorator';
import { AgenciasModule } from 'src/agencias/agencias.module';
import { IsIdAgenciaNotRegistered } from 'src/agencias/decorators/IsIdAgenciaNotRegistered.decorator';
import { MonedasModule } from 'src/monedas/monedas.module';
import { IsIdMonedaRegistered } from 'src/monedas/decorators/IsIdMonedaRegistered.decorator';
import { IsIdCajaRegistered } from './decorators/IsIdCajaRegistered.decorator';

@Module({
  imports: [DatabaseModule, AgenciasModule, MonedasModule],
  controllers: [CajasController],
  providers: [
    CajasService,
    IsIdCajaRegistered,
    IsIdMonedaRegistered,
    IsIdAgenciaNotRegistered,
    IsNombreCajaRegistered,
    ...CajasProviders,
  ],
  exports: [CajasService],
})
export class CajasModule {}
