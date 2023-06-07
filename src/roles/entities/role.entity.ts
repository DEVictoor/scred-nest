import {
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ timestamps: true })
export class Role extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Column
  nombre: string;

  @Column
  usuarioregistro: string;

  @Column
  usuariomodificacion: string;
}
