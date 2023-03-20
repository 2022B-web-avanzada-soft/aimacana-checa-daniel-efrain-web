import { Test, TestingModule } from '@nestjs/testing';
import { SistemaSolarResolver } from './sistema-solar.resolver';

describe('SistemaSolarResolver', () => {
  let resolver: SistemaSolarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SistemaSolarResolver],
    }).compile();

    resolver = module.get<SistemaSolarResolver>(SistemaSolarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
