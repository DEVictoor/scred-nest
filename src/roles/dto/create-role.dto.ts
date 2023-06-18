import { IsString } from 'class-validator';
import { NombreNotRegistered } from '../decorators/nombre.decorator';

export class CreateRoleDto {
  @IsString({ message: 'El nombre debe ser de tipo string' })
  @NombreNotRegistered({ message: 'Nombre ya registrado. Digite otro' })
  nombre: string;
}
