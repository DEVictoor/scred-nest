import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Caja } from 'src/cajas/entities/caja.entity';

@Table({ timestamps: true })
export class Agencia extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  nombre: string;

  @Column
  direccion: string;

  @Column(DataType.CHAR)
  @Default('A')
  estado: string;

  @HasMany(() => Caja)
  cajas: Caja[];

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
