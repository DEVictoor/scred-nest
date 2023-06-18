import {
  ValidationOptions,
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RolesService } from '../roles.service';

@ValidatorConstraint({ name: 'IsNombreRegistered', async: true })
export class IsNombreRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _role: RolesService) {}

  async validate(value: any) {
    const role = await this._role.findOneByNombre(value);
    return role === null;
  }
}

export function NombreNotRegistered(validateOptions?: ValidationOptions) {
  return function (obj: object, properyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: properyName,
      options: validateOptions,
      constraints: [],
      validator: IsNombreRegistered,
    });
  };
}
