import { ObjectType, Field, Int } from '@nestjs/graphql';
import {type} from "os";
import {isBooleanObject} from "util/types";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {SistemaSolar} from "../../sistema-solar/sistemaSolar.entity";

@Entity()
@ObjectType()
export class Planeta {

  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  nombre: string;

  @Column( { type: "boolean"})
  @Field(type =>  Boolean)
  tieneAnillos: boolean;

  @Column( { type: "date"})
  @Field(type => Date)
  fechaUltimaVisita: Date;

  @ManyToOne(() => SistemaSolar, (sistemaSolar) => sistemaSolar.planetas)
  @Field(() => SistemaSolar)
  sistemaSolar: SistemaSolar;
}
