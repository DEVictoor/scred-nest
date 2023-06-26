import { Inject, Injectable } from '@nestjs/common';
import { Caja } from 'src/cajas/entities/caja.entity';
import { Person } from 'src/person/entities/person.entity';
import { Role } from 'src/roles/entities/role.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @Inject('EMPLEADO_REPO')
    private readonly _repo: typeof Empleado,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado | null> {
    return await this._repo.create({ ...createEmpleadoDto });
  }

  async findOrCreate(dto: CreateEmpleadoDto): Promise<Empleado> {
    const [empleado, isCreated] = await this._repo.findOrCreate({
      where: { ...dto },
      include: [Role, Person, Caja],
    });
    return empleado;
  }

  findAll() {
    return `This action returns all empleados`;
  }

  async findOne(id: string): Promise<Empleado | null> {
    return await this._repo.findByPk(id);
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
