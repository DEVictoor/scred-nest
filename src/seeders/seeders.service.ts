import { Injectable } from '@nestjs/common';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { PersonService } from 'src/person/person.service';
import { RolesService } from 'src/roles/roles.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SeedersService {
  constructor(
    private readonly _person: PersonService,
    private readonly _user: UsersService,
    private readonly _role: RolesService,
    private readonly _empleado: EmpleadosService,
  ) {}

  async create() {
    const adminRole = await this._role.create({ nombre: 'admin' });
    const cobradorRole = await this._role.create({ nombre: 'cobrador' });
    const cajeroRole = await this._role.create({ nombre: 'cajero' });
    const supervisorRole = await this._role.create({ nombre: 'supervisor' });

    const personCreadted = await this._person.create({
      dni: '71238977',
      correo: 'devictormireles@gmail.com',
      estado: 'A',
      nombre: 'Victor Fernando',
      apellido: 'Mireles Bernabé',
      celular: '955014274',
      direccion: 'Direccion en la calle ',
    });

    // const empleadoCreated = await this._empleado.create({});
  }
}
