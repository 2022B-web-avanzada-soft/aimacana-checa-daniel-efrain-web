import { Module } from '@nestjs/common';
import { PlanetasService } from './planetas.service';
import { PlanetasResolver } from './planetas.resolver';

@Module({
  providers: [PlanetasResolver, PlanetasService]
})
export class PlanetasModule {}
