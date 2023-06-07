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

  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll(): Promise<Person[]> {
    return this.personRepo.findAll<Person>();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
