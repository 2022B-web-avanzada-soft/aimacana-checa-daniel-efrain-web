import {Column} from "typeorm";
import {Field, InputType, Int} from "@nestjs/graphql";
import {IsNotEmpty, MaxLength} from "class-validator";

@InputType()
export class CreateSistemaSolarInput{

    @MaxLength(100)
    @IsNotEmpty()
    @Field()
    nombre: string;


    @IsNotEmpty()
    @Field( (type) => Int)
    numeroDePlanetas: number;

    @MaxLength(100)
    @IsNotEmpty()
    @Field()
    estrella: string;

    @IsNotEmpty()
    @Field( (type) => Int)
    edad: number;
}