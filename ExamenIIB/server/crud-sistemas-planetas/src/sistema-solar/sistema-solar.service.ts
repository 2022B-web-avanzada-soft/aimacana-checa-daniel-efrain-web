import { Injectable } from '@nestjs/common';
import { SistemaSolar } from './sistemaSolar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateSistemaSolarInput} from "./dto/create-sistemaSolar.input";

@Injectable()
export class SistemaSolarService {

    constructor(@InjectRepository(SistemaSolar) private sistemasSolaresRepository: Repository<SistemaSolar>) {
    }

    async findAll(): Promise<SistemaSolar[]> {
        return this.sistemasSolaresRepository.find();
    }
    createSistemaSolar(sistemaSolar: CreateSistemaSolarInput): Promise<SistemaSolar>{
        const newSistemaSolar = this.sistemasSolaresRepository.create(sistemaSolar);
        return this.sistemasSolaresRepository.save(newSistemaSolar);

    }




}

