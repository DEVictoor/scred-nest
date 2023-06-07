import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  Unique,
  Comment,
} from 'sequelize-typescript';

@Table({ timestamps: true, modelName: 'Person' })
export class Person extends Model {
  @PrimaryKey
  @Column(DataType.UUID)
  id: string;

  @Unique
  @Comment('Test comentario')
  @Column(DataType.INTEGER)
  dni: number;

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

  @Column
  usuariomodificacion: string;

  @Column
  usuarioregistro: string;
}
