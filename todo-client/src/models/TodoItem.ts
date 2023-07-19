export interface TodoItem {
  id?: number;
  description: string;
  completed: boolean;
  dueDate?: Date;
  completedDate?: Date;
}
