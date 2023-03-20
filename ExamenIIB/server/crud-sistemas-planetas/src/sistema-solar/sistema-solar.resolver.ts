import {Args, Mutation, Resolver} from '@nestjs/graphql';
import { SistemaSolarService } from "./sistema-solar.service";
import { Query } from "@nestjs/graphql";
import { SistemaSolar} from "./sistemaSolar.entity";
import {CreateSistemaSolarInput} from "./dto/create-sistemaSolar.input";

@Resolver()
export class SistemaSolarResolver {

    constructor(private sistemaSolarService: SistemaSolarService) {}

    @Query((returns) => [SistemaSolar])
    SistemaSolar(){
        return this.sistemaSolarService.findAll();
    }

    @Mutation((returns) => SistemaSolar)
    createSistemaSolar(@Args('sistemaSolarInput') sistemaSolarInput: CreateSistemaSolarInput){

        return this.sistemaSolarService.createSistemaSolar(sistemaSolarInput);

    }
}
