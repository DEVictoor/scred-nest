import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLE_REPO')
    private _repo: typeof Role,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role | null> {
    return await this._repo.create({ ...createRoleDto });
  }

  async findOneByNombre(nombre: string): Promise<Role | null> {
    return await this._repo.findOne({ where: { nombre } });
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
