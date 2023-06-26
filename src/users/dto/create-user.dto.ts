import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { IdEmpleadoRegistered } from 'src/empleados/decorators/IsIdEmpleadoRegistered.decorator';
import { Estado } from 'src/enums/estados';
import { UsernameUserRegistered } from '../decorators/IsUsernameUserRegistered.decorator';

export class CreateUserDto {
  @IsString({
    message: 'El username debe ser de tipo string',
  })
  @IsNotEmpty({ message: 'El username no debe estar vacio' })
  @UsernameUserRegistered({ message: 'Username ya registrado, elija otro' })
  username: string;

  @IsString({
    message: 'La contraseña debe ser de tipo string',
  })
  @IsNotEmpty({
    message: 'La contraseña no debe estar vacia',
  })
  password: string;

  @IsEnum(Estado, { message: 'Ingrese un valor valido para el estado' })
  estado: Estado;

  @IsUUID('4', { message: 'Ingrese el id para empleado de tipo UUID' })
  @IdEmpleadoRegistered({ message: 'El id empleado no existe' })
  idempleado: string;
}
