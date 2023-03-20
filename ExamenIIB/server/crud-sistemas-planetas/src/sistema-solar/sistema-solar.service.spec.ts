import { Test, TestingModule } from '@nestjs/testing';
import { SistemaSolarService } from './sistema-solar.service';

describe('SistemaSolarService', () => {
  let service: SistemaSolarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SistemaSolarService],
    }).compile();

    service = module.get<SistemaSolarService>(SistemaSolarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
