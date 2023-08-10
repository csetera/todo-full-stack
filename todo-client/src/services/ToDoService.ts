
import { TodoItem } from '@/models/TodoItem';

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

export async function addItem(item: TodoItem): Promise<TodoItem> {
    if (process.env.NODE_ENV == "development") {
        item.id = TEST_ITEMS.length + 1;
        TEST_ITEMS.push(item);

        return Promise.resolve(item);
    } else {
        const res = await fetch('http://localhost:3333/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to add new item')
        }

        return item;
    }
}

export async function getItems(): Promise<TodoItem[]> {
    if (process.env.NODE_ENV == "development") {
        return Promise.resolve(TEST_ITEMS);
    } else {
        const res = await fetch('http://localhost:3333/api/todo')
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch items')
        }

        return res.json();
    }
}