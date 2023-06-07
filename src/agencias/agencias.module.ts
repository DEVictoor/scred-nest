import { Module } from '@nestjs/common';
import { AgenciasService } from './agencias.service';
import { AgenciasController } from './agencias.controller';

@Module({
  controllers: [AgenciasController],
  providers: [AgenciasService]
})
export class AgenciasModule {}
