'use client'

import { addItem } from "@/services/ToDoService";
import { Fab } from "@mui/material";
import { TodoItem } from "@/models/TodoItem";
import { useRouter } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';

export default function AddItemComponent() {
    const router = useRouter();

    const addNewItem = async () => {
        const newItem: TodoItem = {
            description: 'New To Do Item',
            completed: false,
            dueDate: new Date(),
        };

        await addItem(newItem);

        router.refresh();
    }

    return (
        <Fab color="primary" aria-label="add" onClick={(() => addNewItem())}>
            <AddIcon />
        </Fab>
    );
}