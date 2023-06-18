import { Controller, Post, Body } from '@nestjs/common';
import { SeedersService } from './seeders.service';

@Controller('seeders')
export class SeedersController {
  constructor(private readonly seedersService: SeedersService) {}

  @Post()
  async create() {
    return await this.seedersService.create();
  }
}
