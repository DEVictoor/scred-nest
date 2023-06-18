import { Module } from '@nestjs/common';
import { AgenciasService } from './agencias.service';
import { AgenciasController } from './agencias.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AgenciaProviders } from './agencia.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AgenciasController],
  providers: [AgenciasService, ...AgenciaProviders],
})
export class AgenciasModule {}
