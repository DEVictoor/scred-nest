import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MonedasService } from '../monedas.service';

@ValidatorConstraint({ name: 'IsAbreviaturaRegistered', async: true })
export class IsAbreviaturaRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _moneda: MonedasService) {}

  async validate(value: any) {
    const moneda = await this._moneda.findOneByAbreviatura(value);
    return moneda === null;
  }
}

export function AbreviaturaRegistered(opts?: ValidationOptions) {
  return function (obj: Object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: opts,
      constraints: [],
      validator: IsAbreviaturaRegistered,
    });
  };
}
