import { Test, TestingModule } from '@nestjs/testing';
import { AgenciasController } from './agencias.controller';
import { AgenciasService } from './agencias.service';

describe('AgenciasController', () => {
  let controller: AgenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgenciasController],
      providers: [AgenciasService],
    }).compile();

    controller = module.get<AgenciasController>(AgenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
