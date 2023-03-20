import { Test, TestingModule } from '@nestjs/testing';
import { PlanetasResolver } from './planetas.resolver';
import { PlanetasService } from './planetas.service';

describe('PlanetasResolver', () => {
  let resolver: PlanetasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetasResolver, PlanetasService],
    }).compile();

    resolver = module.get<PlanetasResolver>(PlanetasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
