import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Agencia } from 'src/agencias/entities/agencia.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Moneda } from 'src/monedas/entities/moneda.entity';

@Table({ timestamps: true })
export class Caja extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Unique
  @Column
  nombre: string;

  @Column(DataType.CHAR(1))
  estado: string;

  @Column(DataType.BOOLEAN)
  isOpen: boolean;

  @AllowNull
  @Column(DataType.FLOAT)
  monto: number;

  @AllowNull
  @Column(DataType.INTEGER)
  orden: number;

  @ForeignKey(() => Agencia)
  @Column(DataType.UUID)
  idagencia: string;

  @BelongsTo(() => Agencia)
  agencia: Agencia;

  @ForeignKey(() => Moneda)
  @Column(DataType.UUID)
  idmoneda: string;

  @BelongsTo(() => Moneda)
  moneda: Moneda;

  @HasMany(() => Empleado)
  empleados: Empleado[];

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
