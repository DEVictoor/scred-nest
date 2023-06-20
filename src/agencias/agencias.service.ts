import { Inject, Injectable } from '@nestjs/common';
import { CreateAgenciaDto } from './dto/create-agencia.dto';
import { UpdateAgenciaDto } from './dto/update-agencia.dto';
import { Agencia } from './entities/agencia.entity';

@Injectable()
export class AgenciasService {
  constructor(
    @Inject('AGENCIA_REPO')
    private readonly _model: typeof Agencia,
  ) {}

  async create(createAgenciaDto: CreateAgenciaDto): Promise<Agencia> {
    return await this._model.create({ ...createAgenciaDto });
  }

  async findOneByNombre(nombre: string): Promise<Agencia | null> {
    return await this._model.findOne({ where: { nombre } });
  }

  findAll() {
    return `This action returns all agencias`;
  }

  async findOne(id: string): Promise<Agencia | null> {
    return await this._model.findByPk(id);
  }

  update(id: number, updateAgenciaDto: UpdateAgenciaDto) {
    return `This action updates a #${id} agencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} agencia`;
  }
}
