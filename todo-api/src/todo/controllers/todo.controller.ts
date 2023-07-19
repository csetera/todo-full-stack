import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ToDoService } from '@/todo/services/todo.service';
import { ToDoItemEntity } from '../entities/ToDoItemEntity';

@Controller('todo')
export class ToDoController {
  constructor(private readonly service: ToDoService) {}

  @Post()
  addItem(@Body() item: ToDoItemEntity): Promise<ToDoItemEntity> {
    return this.service.addItem(item);
  }

  @Get()
  getAllItems(): Promise<ToDoItemEntity[]> {
    return this.service.getAllItems();
  }

  @Get(':id')
  getOneItemById(@Param('id') id: number): Promise<ToDoItemEntity> {
    return this.service.getOneItemById(id);
  }
}
