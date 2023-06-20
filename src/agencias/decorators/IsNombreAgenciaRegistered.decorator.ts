import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AgenciasService } from '../agencias.service';

@ValidatorConstraint({ name: 'IsNombreAgenciaRegistered', async: true })
export class IsNombreAgenciaRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: AgenciasService) {}

  async validate(value: any) {
    const agencia = await this._service.findOneByNombre(value);
    return agencia === null;
  }
}

export function NombreAgenciaNotRegistered(opts?: ValidationOptions) {
  return function (obj: object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName,
      options: opts,
      constraints: [],
      validator: IsNombreAgenciaRegistered,
    });
  };
}
