import {
  BelongsTo,
  Model,
  Column,
  DataType,
  Default,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Caja } from 'src/cajas/entities/caja.entity';
import { Role } from 'src/roles/entities/role.entity';

@Table({ timestamps: true })
export class Empleado extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column(DataType.CHAR)
  @Default('A')
  estado: string;

  @Column
  claveadmin: string;

  @ForeignKey(() => Role)
  @Column
  idrole: string;

  @BelongsTo(() => Role)
  role: Role;

  @ForeignKey(() => Caja)
  @Column
  idcaja: string;

  @BelongsTo(() => Caja)
  caja: Caja;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
