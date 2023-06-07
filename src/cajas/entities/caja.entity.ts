import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Agencia } from 'src/agencias/entities/agencia.entity';
import { Moneda } from 'src/monedas/entities/moneda.entity';

@Table({ timestamps: true })
export class Caja extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  nombre: string;

  @Column(DataType.CHAR)
  estado: string;

  @Column(DataType.BOOLEAN)
  isOpen: boolean;

  @Column(DataType.FLOAT)
  monto: number;

  @Column(DataType.INTEGER)
  orden: number;

  @ForeignKey(() => Agencia)
  @Column
  idagencia: string;

  @BelongsTo(() => Agencia)
  agencia: Agencia;

  @ForeignKey(() => Moneda)
  @Column
  idmoneda: string;

  @BelongsTo(() => Moneda)
  moneda: Moneda;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
