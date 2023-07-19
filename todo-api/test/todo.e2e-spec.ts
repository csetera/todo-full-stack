import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/AppModule';
import { loadTestData, NEW_TEST_ITEM } from '@/todo/test/TestToDoItems';

describe('TodoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    await loadTestData(moduleFixture);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET All)', async () => {
    const response = await request(app.getHttpServer())
      .get('/todo')
      .expect(200);

    expect(response.body).toHaveLength(2);
  });

  it('/ (GET By ID)', async () => {
    const allItems = await request(app.getHttpServer())
      .get('/todo')
      .expect(200);
    expect(allItems.body).toHaveLength(2);

    const firstItem = allItems.body[0];
    const byId = await request(app.getHttpServer())
      .get('/todo/' + firstItem.id)
      .expect(200);

    expect(byId.body).toMatchObject({
      completed: false,
      completedDate: null,
      description: 'Item1',
      id: firstItem.id,
    });
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/todo')
      .send(NEW_TEST_ITEM)
      .expect(201);

    expect(response.body).toMatchObject({
      description: 'Item3',
      completed: false,
    });
  });
});
