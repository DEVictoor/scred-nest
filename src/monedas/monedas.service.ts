import { Inject, Injectable } from '@nestjs/common';
import { CreateMonedaDto } from './dto/create-moneda.dto';
import { UpdateMonedaDto } from './dto/update-moneda.dto';
import { Moneda } from './entities/moneda.entity';

@Injectable()
export class MonedasService {
  constructor(
    @Inject('MONEDA_REPO')
    private readonly _model: typeof Moneda,
  ) {}

  async create(createMonedaDto: CreateMonedaDto): Promise<Moneda | null> {
    return await this._model.create({ ...createMonedaDto });
  }

  async findOrCreate(dto: CreateMonedaDto): Promise<Moneda> {
    const [moneda, isCreated] = await this._model.findOrCreate({
      where: {
        ...dto,
        usuarioregistro: 'SYSTEM',
        usuariomodificacion: 'SYSTEM',
      },
    });

    return moneda;
  }

  async findAll(): Promise<Moneda[]> {
    return await this._model.findAll();
  }

  async findOneByName(name: string): Promise<Moneda | null> {
    return this._model.findOne({ where: { nombre: name } });
  }

  async findOneByAbreviatura(abrv: string): Promise<Moneda | null> {
    return this._model.findOne({ where: { abreviatura: abrv } });
  }

  async findOneeBySimbolo(simbolo: string): Promise<Moneda | null> {
    return this._model.findOne({ where: { simbolo } });
  }

  async findOne(id: string): Promise<Moneda | null> {
    return await this._model.findByPk(id);
  }

  update(id: number, updateMonedaDto: UpdateMonedaDto) {
    return `This action updates a #${id} moneda`;
  }

  remove(id: number) {
    return `This action removes a #${id} moneda`;
  }
}
