import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  Unique,
  Comment,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Table({ timestamps: true })
export class Person extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Unique
  // @Comment('Test comentario')
  @Column(DataType.CHAR(8))
  dni: string;

  @HasOne(() => Empleado)
  empleado: Empleado;

  @Column
  nombre: string;

  @Column
  apellido: string;

  @Column
  celular: string;

  @Column
  correo: string;

  @Column
  direccion: string;

  @Column
  estado: string;

  @AllowNull
  @Column
  usuariomodificacion: string;

  @AllowNull
  @Column
  usuarioregistro: string;
}
