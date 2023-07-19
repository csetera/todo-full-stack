import { Module } from '@nestjs/common';
import { ToDoController } from '@/todo/controllers/todo.controller';
import { ToDoService } from '@/todo/services/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoItemEntity } from './entities/ToDoItemEntity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoItemEntity])],
  controllers: [ToDoController],
  providers: [ToDoService],
})
export class ToDoModule {}
