import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPO')
    private readonly _model: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    return await this._model.create({ ...createUserDto });
  }

  async findOrCreate(dto: CreateUserDto): Promise<User> {
    const user = await this.findOneByUsername(dto.username);

    if (user) return user;

    const newUser = await this.create(dto);

    return await this.findOne(newUser.id);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<User | null> {
    return await this._model.findByPk(id, { include: [Empleado] });
  }

  async findOneByUsername(username: string) {
    return await this._model.findOne({
      where: { username },
      include: [Empleado],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
