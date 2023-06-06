import { Model } from 'sequelize';
import { Column, DataType, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Person extends Model {
  @PrimaryKey
  @Column(DataType.UUIDV4)
  id: string;

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
