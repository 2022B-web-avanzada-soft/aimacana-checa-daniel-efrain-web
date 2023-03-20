import { Module } from '@nestjs/common';
import { SistemaSolarService } from './sistema-solar.service';
import { SistemaSolarResolver } from './sistema-solar.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import {SistemaSolar} from "./sistemaSolar.entity";
@Module({
  imports: [TypeOrmModule.forFeature([SistemaSolar])],
  providers: [SistemaSolarService, SistemaSolarResolver]
})
export class SistemaSolarModule {}
