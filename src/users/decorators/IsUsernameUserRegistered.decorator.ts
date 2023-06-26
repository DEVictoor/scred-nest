import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'IsUsernameUserRegistered', async: true })
export class IsUsernameUserRegistered implements ValidatorConstraintInterface {
  constructor(private readonly _service: UsersService) {}

  async validate(value: string) {
    const user = await this._service.findOneByUsername(value);
    return user === null;
  }
}

export function UsernameUserRegistered(options?: ValidationOptions) {
  return function (obj: object, propertyName: string) {
    registerDecorator({
      target: obj.constructor,
      propertyName,
      options,
      constraints: [],
      validator: IsUsernameUserRegistered,
    });
  };
}
