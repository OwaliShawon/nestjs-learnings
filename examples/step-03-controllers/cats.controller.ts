import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return ['Tom', 'Mimi'];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create() {
    return { message: 'Created' };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id, deleted: true };
  }
}
