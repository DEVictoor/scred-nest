import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { NombreAgenciaNotRegistered } from '../decorators/IsNombreAgenciaRegistered.decorator';

export class CreateAgenciaDto {
  @IsString({
    message:
      'El tipo de dato para el nombre de la agencia debe ser de tipo string',
  })
  @IsNotEmpty({ message: 'El nombre de la agencia no puede estar vacio' })
  @NombreAgenciaNotRegistered({
    message: 'Nombre de agencia ya registrado. Por favor elija otro',
  })
  @ApiProperty()
  nombre: string;

  @IsString({
    message:
      'El tipo de dato para la direccion de la agencia debe ser tipo string',
  })
  @IsNotEmpty({ message: 'La direccion de la caja no puede estar vacia' })
  @ApiProperty()
  direccion: string;

  @IsString({
    message: 'El tipo de dato para el estado de la caja debe ser string',
  })
  @IsNotEmpty({ message: 'El estado de la caja no puede ir vacia' })
  @ApiProperty()
  estado: string;
}
