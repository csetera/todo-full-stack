import { EntityManager } from 'typeorm';
import { TestingModule } from '@nestjs/testing';
import { ToDoItemEntity } from '@/todo/entities/ToDoItemEntity';

//
// Basic set of test To Do items
//
export const BASE_DATA: ToDoItemEntity[] = [
  {
    description: 'Item1',
    completed: false,
    dueDate: new Date('01/01/2020'),
  },
  {
    description: 'Item2',
    completed: true,
    completedDate: new Date('01/01/2020'),
    dueDate: new Date('02/01/2020'),
  },
];

//
// Additional To Do item
//
export const NEW_TEST_ITEM: ToDoItemEntity = {
  description: 'Item3',
  completed: false,
  dueDate: new Date('03/01/2020'),
};

/**
 * Load the initial set of test items
 *
 * @param module Module to use for accessing the EntityManager
 */
export async function loadTestData(module: TestingModule) {
  const entityManager = module.get<EntityManager>(EntityManager);

  entityManager.clear(ToDoItemEntity);
  for (let i = 0; i < BASE_DATA.length; i++) {
    await entityManager.save(
      entityManager.create(ToDoItemEntity, BASE_DATA[i]),
    );
  }
}
