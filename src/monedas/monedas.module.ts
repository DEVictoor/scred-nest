import { Module } from '@nestjs/common';
import { MonedasService } from './monedas.service';
import { MonedasController } from './monedas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MonedasProviders } from './monedas.providers';
import { IsAbreviaturaRegistered } from './decorators/IsAbreviaturaRegistered.decorator';
import { IsSimboloRegistered } from './decorators/IsSimboloRegistered.decorator';
import { IsNombreRegistered } from './decorators/IsNombreRegistered.decorator';

@Module({
  imports: [DatabaseModule],
  controllers: [MonedasController],
  providers: [
    // Validates
    MonedasService,
    IsNombreRegistered,
    IsAbreviaturaRegistered,
    IsSimboloRegistered,
    ...MonedasProviders,
  ],
  exports: [MonedasService],
})
export class MonedasModule {}
