import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PlanetasService } from './planetas.service';
import { Planeta } from './entities/planeta.entity';
import { CreatePlanetaInput } from './dto/create-planeta.input';
import { UpdatePlanetaInput } from './dto/update-planeta.input';

@Resolver(() => Planeta)
export class PlanetasResolver {
  constructor(private readonly planetasService: PlanetasService) {}

  @Mutation(() => Planeta)
  createPlaneta(@Args('createPlanetaInput') createPlanetaInput: CreatePlanetaInput) {
    return this.planetasService.create(createPlanetaInput);
  }

  @Query(() => [Planeta], { name: 'planetas' })
  findAll() {
    return this.planetasService.findAll();
  }

  @Query(() => Planeta, { name: 'planeta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.planetasService.findOne(id);
  }

  @Mutation(() => Planeta)
  updatePlaneta(@Args('updatePlanetaInput') updatePlanetaInput: UpdatePlanetaInput) {
    return this.planetasService.update(updatePlanetaInput.id, updatePlanetaInput);
  }

  @Mutation(() => Planeta)
  removePlaneta(@Args('id', { type: () => Int }) id: number) {
    return this.planetasService.remove(id);
  }
}
