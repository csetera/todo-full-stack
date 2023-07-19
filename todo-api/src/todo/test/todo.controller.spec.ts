import { AppModule } from '@/AppModule';
import { Test, TestingModule } from '@nestjs/testing';
import { ToDoItemEntity } from '@/todo/entities/ToDoItemEntity';
import { ToDoController } from '../controllers/todo.controller';
import { ToDoService } from '@/todo/services/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loadTestData, NEW_TEST_ITEM } from '@/todo/test/TestToDoItems';

describe('ToDoController', () => {
  let appController: ToDoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypeOrmModule.forFeature([ToDoItemEntity])],
      controllers: [ToDoController],
      providers: [ToDoService],
    }).compile();

    await loadTestData(app);
    appController = app.get<ToDoController>(ToDoController);
  });

  describe('To Do Controller', () => {
    it('Item should be added', async () => {
      expect(await appController.addItem(NEW_TEST_ITEM)).toMatchObject({
        description: 'Item3',
        completed: false,
        dueDate: new Date('03/01/2020'),
      });

      const allItems = await appController.getAllItems();
      expect(allItems).toHaveLength(3);
    });

    it('Should return all ToDoItems', async () => {
      expect(await appController.getAllItems()).toHaveLength(2);
    });

    it('Should return item with specified id', async () => {
      const all = await appController.getAllItems();
      const first = all[0];

      expect(await appController.getOneItemById(first.id)).toMatchObject({
        completed: false,
        completedDate: null,
        description: 'Item1',
        id: first.id,
      });
    });
  });
});
