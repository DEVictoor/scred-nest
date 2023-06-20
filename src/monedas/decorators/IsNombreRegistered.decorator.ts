import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { MonedasService } from '../monedas.service';

@ValidatorConstraint({ name: 'IsNombreRegistered', async: true })
export class IsNombreRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _moneda: MonedasService) {}

  async validate(value: any) {
    const moneda = await this._moneda.findOneByName(value);
    return moneda === null;
  }
}

export function NombreNotRegistered(opts?: ValidationOptions) {
  return function (obj: Object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: opts,
      constraints: [],
      validator: IsNombreRegistered,
    });
  };
}
