import Card from "@mui/material/Card";
import { CardContent, CardHeader, Checkbox, Table, TableBody, TableContainer, TableRow, TableCell } from "@mui/material";
import { TodoItem } from '@/models/TodoItem';

export interface Props {
    item: TodoItem
}

export default function ToDoItemComponent(props: Props) {
    const dueDate = props.item.dueDate?.toLocaleDateString();
    const completionDate = props.item.completed ? props.item.completedDate?.toLocaleDateString() : "Incomplete";

    return (
        <Card key={props.item.id}>
            <CardHeader title={props.item.description}></CardHeader>
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell>Completed</TableCell>
                            <TableCell><Checkbox checked={props.item.completed}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Completed Date</TableCell>
                            <TableCell>{completionDate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Due Date</TableCell>
                            <TableCell>{dueDate}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}