import { Module } from '@nestjs/common';
import { MonedasService } from './monedas.service';
import { MonedasController } from './monedas.controller';

@Module({
  controllers: [MonedasController],
  providers: [MonedasService]
})
export class MonedasModule {}
