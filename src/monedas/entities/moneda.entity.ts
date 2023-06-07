import {
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Caja } from 'src/cajas/entities/caja.entity';

@Table({ timestamps: true })
export class Moneda extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  nombre: string;

  @Column
  abreviatura: string;

  @Column
  simbolo: string;

  @Column(DataType.CHAR)
  estado: string;

  @HasMany(() => Caja)
  cajas: Caja[];

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
