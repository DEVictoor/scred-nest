import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AgenciasService } from 'src/agencias/agencias.service';
import { CajasService } from 'src/cajas/cajas.service';
import { EmpleadosService } from 'src/empleados/empleados.service';
import { Estado } from 'src/enums/estados';
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
    try {
      // Roles
      const adminRole = await this._role.findOrCreate({ nombre: 'admin' });
      const cobradorRole = await this._role.findOrCreate({
        nombre: 'cobrador',
      });
      const cajeroRole = await this._role.findOrCreate({ nombre: 'cajero' });
      const supervisorRole = await this._role.findOrCreate({
        nombre: 'supervisor',
      });

      // Monedas
      const moneda_pen = await this._moneda.findOrCreate({
        nombre: 'Soles',
        estado: 'A',
        abreviatura: 'PEN',
        simbolo: 'S/.',
      });

      const moneda_dolar = await this._moneda.findOrCreate({
        nombre: 'Dolar americano',
        estado: 'A',
        abreviatura: 'USD',
        simbolo: '$/.',
      });

      // Agencias
      const agencia_uno = await this._agencia.findOrCreate({
        nombre: 'Agencia Uno',
        direccion: 'Direccion de la agencia uno',
        estado: 'A',
      });

      // Cajas
      const caja_uno = await this._caja.findOrCreate({
        nombre: 'CAJA_UNO',
        estado: 'A',
        isOpen: false,
        monto: 2000,
        idmoneda: moneda_pen.id,
        idagencia: agencia_uno.id,
      });

      const personCreated = await this._person.findOrCreate({
        dni: '01234567',
        correo: 'test@gmail.com',
        estado: 'A',
        nombre: 'Victor',
        apellido: 'M',
        celular: '912121212',
        direccion: 'Direccion en la calle',
      });

      const empleado_test = await this._empleado.findOrCreate({
        estado: 'A',
        idrole: adminRole.id,
        idcaja: caja_uno.id,
        idperson: personCreated.id,
      });

      const user_test = await this._user.findOrCreate({
        password: 'password',
        username: 'ADMIN',
        estado: Estado.HABILITADO,
        idempleado: empleado_test.id,
      });

      return user_test;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        { error: 'Sucedio un error con el seeder service' },
        HttpStatus.FORBIDDEN,
        { cause: error },
      );
    }
  }
}
