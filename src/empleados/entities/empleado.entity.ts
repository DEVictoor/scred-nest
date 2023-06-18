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
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column(DataType.CHAR(1))
  estado: string;

  @Column(DataType.CHAR(150))
  claveadmin: string;

  @ForeignKey(() => Role)
  @Column(DataType.UUID)
  idrole: string;

  @BelongsTo(() => Role)
  role: Role;

  @ForeignKey(() => Caja)
  @Column(DataType.UUID)
  idcaja: string;

  @BelongsTo(() => Caja)
  caja: Caja;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
