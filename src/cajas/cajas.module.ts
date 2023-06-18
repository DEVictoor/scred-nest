import { Module } from '@nestjs/common';
import { CajasService } from './cajas.service';
import { CajasController } from './cajas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CajasProviders } from './cajas.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CajasController],
  providers: [CajasService, ...CajasProviders],
})
export class CajasModule {}
