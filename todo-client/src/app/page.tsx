import { Container, Stack } from "@mui/material";
import { TodoItem } from '@/models/TodoItem';
import AddItemComponent from '@/components/AddItemComponent';
import TodoItemComponent from '@/components/TodoItemComponent';

const TEST_ITEMS: TodoItem[] = [
  {
    id: 1,
    description: 'Item 1',
    completed: false,
    dueDate: new Date('01/01/2020'),
  },
  {
    id: 2,
    description: 'Item 2',
    completed: true,
    completedDate: new Date('01/01/2020'),
    dueDate: new Date('02/01/2020'),
  },
  {
    id: 3,
    description: 'Item 3',
    completed: false,
    dueDate: new Date('01/01/2020'),
  },
];

export default async function Home() {
  async function getItems(): Promise<TodoItem[]> {
    if (process.env.NODE_ENV == "development") {
      return Promise.resolve(TEST_ITEMS);
    } else {
      const res = await fetch('http://localhost:3333/api/todo')
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch items')
      }

      return res.json()
    }
  }

  const items = await getItems();

  return (
    <main>
      <Container>
        <Stack spacing={2}>
            {items.map((item) => (
              <TodoItemComponent item={item} key={item.id} />
            ))}
        </Stack>
        <AddItemComponent />
      </Container>
    </main>
  )
}
