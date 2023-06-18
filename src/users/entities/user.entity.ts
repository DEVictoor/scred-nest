import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Table({ timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  alias: string;

  @Column
  password: string;

  @Column(DataType.CHAR)
  estado: string;

  @ForeignKey(() => Empleado)
  @Column(DataType.UUID)
  idempleado: string;

  @BelongsTo(() => Empleado)
  empleado: Empleado;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
