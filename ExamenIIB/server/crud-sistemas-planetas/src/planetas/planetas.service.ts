import { Injectable } from '@nestjs/common';
import { CreatePlanetaInput } from './dto/create-planeta.input';
import { UpdatePlanetaInput } from './dto/update-planeta.input';

@Injectable()
export class PlanetasService {
  create(createPlanetaInput: CreatePlanetaInput) {
    return 'This action adds a new planeta';
  }

  findAll() {
    return `This action returns all planetas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planeta`;
  }

  update(id: number, updatePlanetaInput: UpdatePlanetaInput) {
    return `This action updates a #${id} planeta`;
  }

  remove(id: number) {
    return `This action removes a #${id} planeta`;
  }
}
