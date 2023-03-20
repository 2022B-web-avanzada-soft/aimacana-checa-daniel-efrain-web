import { CreatePlanetaInput } from './create-planeta.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanetaInput extends PartialType(CreatePlanetaInput) {
  @Field(() => Int)
  id: number;
}
