import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { AbreviaturaRegistered } from '../decorators/IsAbreviaturaRegistered.decorator';
import { NombreNotRegistered } from '../decorators/IsNombreRegistered.decorator';
import { SimboloRegistered } from '../decorators/IsSimboloRegistered.decorator';

export class CreateMonedaDto {
  @IsString({ message: 'El nombre de la moneda debe ser de tipo string' })
  @IsNotEmpty({
    message: 'No puedes mandar un valor vacio para el nombre de la moneda',
  })
  @NombreNotRegistered({
    message: 'Ese nombra para la moneda ya esta registrado eliga otro',
  })
  @ApiProperty()
  nombre: string;

  @IsString({
    message: 'La abreviatura para la moneda debe ser de tipo string',
  })
  @IsNotEmpty({
    message: 'La abreviatura no puede ser un string vacio',
  })
  @AbreviaturaRegistered({
    message: 'Esa abreviatura ya esta registrada, eliga otra',
  })
  @ApiProperty()
  abreviatura: string;

  @IsString({ message: 'El simbolo debe ser de tipo string' })
  @IsNotEmpty({ message: 'El simbolor no puede estar vacio' })
  @SimboloRegistered({ message: 'El simbolor ya esta registrado. Eliga otro' })
  @ApiProperty()
  simbolo: string;

  @IsString({ message: 'El estado debe ser de tipo string' })
  @IsNotEmpty({ message: 'El estado no debe estar vacio' })
  @ApiProperty()
  estado: string;
}
