import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Table({ timestamps: true })
export class Role extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @HasMany(() => Empleado)
  empleados: Empleado[];

  @Unique
  @Column
  nombre: string;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
