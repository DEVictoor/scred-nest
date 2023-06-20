import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { AgenciasService } from '../agencias.service';

@ValidatorConstraint({ name: 'IsIdAgenciaNotRegistered', async: true })
export class IsIdAgenciaNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: AgenciasService) {}
  async validate(value: string) {
    const agencia = await this._service.findOne(value);
    return agencia === null;
  }
}

export function IdAgenciaNotRegistered(options?: ValidationOptions) {
  return function (o: object, propertyName: string) {
    registerDecorator({
      target: o.constructor,
      propertyName,
      options,
      constraints: [],
      validator: IsIdAgenciaNotRegistered,
    });
  };
}
