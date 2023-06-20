import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MonedasService } from '../monedas.service';

@ValidatorConstraint({ name: 'IsSimboloRegistered', async: true })
export class IsSimboloRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _moneda: MonedasService) {}

  async validate(value: any) {
    const moneda = await this._moneda.findOneeBySimbolo(value);
    return moneda === null;
  }
}

export function SimboloRegistered(opts?: ValidationOptions) {
  return function (obj: Object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: opts,
      constraints: [],
      validator: IsSimboloRegistered,
    });
  };
}
