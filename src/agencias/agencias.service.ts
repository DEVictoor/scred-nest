import { Injectable } from '@nestjs/common';
import { CreateAgenciaDto } from './dto/create-agencia.dto';
import { UpdateAgenciaDto } from './dto/update-agencia.dto';

@Injectable()
export class AgenciasService {
  create(createAgenciaDto: CreateAgenciaDto) {
    return 'This action adds a new agencia';
  }

  findAll() {
    return `This action returns all agencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agencia`;
  }

  update(id: number, updateAgenciaDto: UpdateAgenciaDto) {
    return `This action updates a #${id} agencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} agencia`;
  }
}
