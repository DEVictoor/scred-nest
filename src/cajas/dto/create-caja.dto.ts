import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { IdAgenciaNotRegistered } from 'src/agencias/decorators/IsIdAgenciaNotRegistered.decorator';
import { IdMonedaNotRegistered } from 'src/monedas/decorators/IsIdMonedaRegistered.decorator';
import { NombreCajaNotRegistered } from '../decorators/IsNombreCajaRegistered.decorator';

export class CreateCajaDto {
  @IsString({
    message: 'El tipo de dato para el nombre de la caja debe ser string',
  })
  @NombreCajaNotRegistered({ message: 'Nombre de caja ya registrada.' })
  nombre: string;

  @IsString({ message: 'Tipo de dato incorrecto para estado.' })
  @IsNotEmpty({ message: 'No puedes mandar un estado vacio o undefined' })
  estado: string;

  @IsBoolean({ message: 'Manda un boolean para isOpen' })
  @IsNotEmpty({ message: 'Debes mandar un valor para isOpen' })
  isOpen: boolean;

  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'El monto debe ser de tipo number' },
  )
  @IsNotEmpty({ message: 'Debes mandar un valor para monto' })
  monto: number;

  @IsUUID('4', {
    message: 'El tipo de dato para idagencia debe ser de tipo UUID',
  })
  @IdAgenciaNotRegistered({ message: 'El id de la agencia no esta registrado' })
  idagencia: string;

  @IsUUID('4', {
    message: 'El tipo de dato para el id moneda debe ser de tipo uuid',
  })
  @IdMonedaNotRegistered({ message: 'El id para la moneda no esta registrado' })
  idmoneda: string;
}
