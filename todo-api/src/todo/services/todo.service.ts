import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDoItemEntity } from '@/todo/entities/ToDoItemEntity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDoItemEntity)
    private itemsRepository: Repository<ToDoItemEntity>,
  ) {}

  addItem(item: ToDoItemEntity): Promise<ToDoItemEntity> {
    const entity = this.itemsRepository.create(item);
    return this.itemsRepository.save(entity);
  }

  getAllItems(): Promise<ToDoItemEntity[]> {
    return this.itemsRepository.find();
  }

  getOneItemById(id: number): Promise<ToDoItemEntity> {
    return this.itemsRepository.findOneBy({ id });
  }
}
