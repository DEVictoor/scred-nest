import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly _user: UsersService, private _jwt: JwtService) {}

  async validateUser(dto: LoginDto) {
    const user = await this._user.findOneByUsername(dto.username);

    if (!user)
      throw new UnauthorizedException('No existe un usuario con ese username');

    const isMatch = await compare(dto.password, user.password);

    if (!isMatch) throw new ConflictException('El password es incorrecto');

    return user;
  }

  login(user: any) {
    const payload = { id: user.id };
    return { access_token: this._jwt.sign(payload) };
  }
}
