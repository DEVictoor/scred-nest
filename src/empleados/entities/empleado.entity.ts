import {
  BelongsTo,
  Model,
  Column,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
  AllowNull,
} from 'sequelize-typescript';
import { Caja } from 'src/cajas/entities/caja.entity';
import { Person } from 'src/person/entities/person.entity';
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

  @AllowNull
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

  @ForeignKey(() => Person)
  @Column(DataType.UUID)
  idperson: string;

  @BelongsTo(() => Person)
  person: Person;

  @BelongsTo(() => Caja)
  caja: Caja;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
