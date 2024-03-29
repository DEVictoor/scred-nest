import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _auth: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this._auth.validateUser({ password, username });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
