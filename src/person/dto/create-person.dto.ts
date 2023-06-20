import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { DniNotRegistered } from '../decorators/dni-not-registered.decorator';

export class CreatePersonDto {
  @IsString({ message: 'El tipo de dato para el dni debe ser un string' })
  // @Length(8, 8, { message: 'El dni tiene que tener exactamente 8 digitos' })
  @DniNotRegistered({
    message: 'Dni ya registrado, digite uno nuevo o edite el actual',
  })
  dni: string;

  @IsString({
    message: ({ property }) =>
      `El valor para ${property} debe ser de tipo string`,
  })
  @IsOptional()
  nombre: string;

  @IsString({
    message: ({ property }) =>
      `El valor para ${property} debe ser de tipo string`,
  })
  @IsOptional()
  apellido: string;

  // @IsPhoneNumber('PE' || 'US' || 'CH', {
  //   message: ({ property }) => `Formato incorreto para ${property}`,
  // })
  @IsOptional()
  celular: string;

  @IsEmail({}, { message: 'Formato erroneo, digite un correo correcto' })
  @IsOptional()
  correo: string;

  @IsString({
    message: ({ property }) =>
      `El valor de ${property} debe ser de tipo string`,
  })
  @IsOptional()
  direccion: string;

  @IsString({
    message: ({ property }) =>
      `El valor de ${property} debe ser de tipo string`,
  })
  // @MinLength(1, { message: 'El numero minimo de caracteres es uno' })
  // @MaxLength(1, { message: 'El numero maximos de caracteres es uno' })
  @IsOptional()
  estado: string;
}
