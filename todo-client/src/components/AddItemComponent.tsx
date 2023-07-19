'use client'

import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function addItem(): void {
    console.log("Add Item");
}

export default function ToDoItemComponent(props: any) {
    return (
        <Fab color="primary" aria-label="add" onClick={(() => addItem())}>
          <AddIcon />
        </Fab>
    );
}