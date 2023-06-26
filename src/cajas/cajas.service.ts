import { Inject, Injectable } from '@nestjs/common';
import { CreateCajaDto } from './dto/create-caja.dto';
import { UpdateCajaDto } from './dto/update-caja.dto';
import { Caja } from './entities/caja.entity';

@Injectable()
export class CajasService {
  constructor(
    @Inject('CAJA_REPO')
    private readonly _model: typeof Caja,
  ) {}

  async create(createCajaDto: CreateCajaDto): Promise<Caja | null> {
    return await this._model.create({ ...createCajaDto });
  }

  async findOrCreate(createCajaDto: CreateCajaDto): Promise<Caja> {
    const [caja, isCreated] = await this._model.findOrCreate({
      where: {
        ...createCajaDto,
        usuarioregistro: 'SYSTEM',
        usuariomodificacion: 'SYSTEM',
      },
    });

    return caja;
  }

  findAll() {
    return `This action returns all cajas`;
  }

  async findOneByNombre(nombre: string): Promise<Caja | null> {
    return await this._model.findOne({ where: { nombre } });
  }

  async findOne(id: string): Promise<Caja | null> {
    return await this._model.findByPk(id);
  }

  update(id: number, updateCajaDto: UpdateCajaDto) {
    return `This action updates a #${id} caja`;
  }

  remove(id: number) {
    return `This action removes a #${id} caja`;
  }
}
