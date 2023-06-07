import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeService } from './database.service';

describe('SequelizeService', () => {
  let service: SequelizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequelizeService],
    }).compile();

    service = module.get<SequelizeService>(SequelizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
