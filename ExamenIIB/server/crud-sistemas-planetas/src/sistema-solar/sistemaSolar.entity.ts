import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, PrimaryGeneratedColumn, Entity, OneToMany} from 'typeorm';
import {type} from "os";
import {Planeta} from "../planetas/entities/planeta.entity";

@Entity()
@ObjectType()
export class SistemaSolar {

    @PrimaryGeneratedColumn()
    @Field( (type) => Int)
    id: number;

    @Column()
    @Field()
    nombre: string;

    @Column({ type: "int"})
    @Field( (type) => Int)
    numeroDePlanetas: number;

    @Column()
    @Field()
    estrella: string;

    @Column({ type: "int"})
    @Field( (type) => Int)
    edad: number;

    @OneToMany(() => Planeta, (planeta) => planeta.sistemaSolar)
    @Field(() => [Planeta])
    planetas: Planeta[];



}