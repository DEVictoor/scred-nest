import { Injectable } from '@nestjs/common';
import { AgenciasService } from 'src/agencias/agencias.service';
import { CajasService } from 'src/cajas/cajas.service';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { MonedasService } from 'src/monedas/monedas.service';
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
    private readonly _moneda: MonedasService,
    private readonly _caja: CajasService,
    private readonly _agencia: AgenciasService,
  ) {}

  async create() {
    // Roles
    const adminRole = await this._role.create({ nombre: 'admin' });
    const cobradorRole = await this._role.create({ nombre: 'cobrador' });
    const cajeroRole = await this._role.create({ nombre: 'cajero' });
    const supervisorRole = await this._role.create({ nombre: 'supervisor' });

    // Monedas
    const moneda_pen = await this._moneda.create({
      nombre: 'Soles',
      estado: 'A',
      abreviatura: 'PEN',
      simbolo: 'S/.',
    });

    const moneda_dolar = await this._moneda.create({
      nombre: 'Dolar americano',
      estado: 'A',
      abreviatura: 'USD',
      simbolo: '$/.',
    });

    // Agencias
    const agencia_uno = await this._agencia.create({
      nombre: 'Agencia Uno',
      direccion: 'Direccion de la agencia uno',
      estado: 'A',
    });

    // Cajas
    const caja_uno = await this._caja.create({
      nombre: 'CAJA_UNO',
      estado: 'A',
      isOpen: false,
      monto: 2000,
      idmoneda: moneda_pen.id,
      idagencia: agencia_uno.id,
    });

    const personCreadted = await this._person.create({
      dni: '71238977',
      correo: 'devictormireles@gmail.com',
      estado: 'A',
      nombre: 'Victor Fernando',
      apellido: 'Mireles Bernabé',
      celular: '955014274',
      direccion: 'Direccion en la calle ',
    });

    const empleado_test = await this._empleado.create({
      estado: 'A',
      idrol: adminRole.id,
      idcaja: caja_uno.id,
      idperson: personCreadted.id,
    });

    return empleado_test;
  }
}
