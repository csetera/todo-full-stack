import { Container, Stack } from "@mui/material";
import { getItems } from "@/services/ToDoService";
import AddItemComponent from '@/components/AddItemComponent';
import TodoItemComponent from '@/components/TodoItemComponent';

export default async function Home() {
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
