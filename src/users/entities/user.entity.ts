import {
  BeforeCreate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Estado } from 'src/enums/estados';
import * as bcrypt from 'bcrypt';

@Table({ timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Unique
  @Column
  username: string;

  @Column
  password: string;

  @Column(DataType.CHAR(1))
  estado: Estado;

  @ForeignKey(() => Empleado)
  @Column(DataType.UUID)
  idempleado: string;

  @BelongsTo(() => Empleado)
  empleado: Empleado;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;

  // Hooks
  @BeforeCreate
  static async hashPassword(instance: User) {
    instance.password = await bcrypt.hash(instance.password, 10);
  }
}
