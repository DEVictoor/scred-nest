import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPO')
    private personRepo: typeof Person,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = await this.personRepo.create({ ...createPersonDto });
    return person;
  }

  async createBulk(data: CreatePersonDto[]) {
    return await this.personRepo.bulkCreate([...(data as any)]);
  }

  async findAll(): Promise<Person[]> {
    return await this.personRepo.findAll<Person>();
  }

  async findOne(id: string) {
    return await this.personRepo.findByPk(id);
  }

  async findOneByDni(dni: number): Promise<Person | null> {
    return await this.personRepo.findOne({ where: { dni } });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
