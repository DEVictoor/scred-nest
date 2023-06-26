import { IsString } from 'class-validator';
import { UsernameUserRegistered } from 'src/users/decorators/IsUsernameUserRegistered.decorator';

export class LoginDto {
  @IsString({ message: 'El username debe ser de tipo string' })
  @UsernameUserRegistered({ message: 'El username no esta registrado' })
  username: string;

  @IsString({ message: 'El password debe ser de tipo string' })
  password: string;
}
