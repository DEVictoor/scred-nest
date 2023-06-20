import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RolesService } from '../roles.service';

@ValidatorConstraint({ name: 'IsIdRoleNotRegistered', async: true })
export class IsIdRoleNotRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _role: RolesService) {}

  async validate(value: any) {
    const role = await this._role.findOne(value);
    return role === null;
  }
}

export function IdRoleNotRegistered(opts: ValidationOptions) {
  return function (obj: object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName: propertyName,
      options: opts,
      constraints: [],
      validator: IsIdRoleNotRegistered,
    });
  };
}
