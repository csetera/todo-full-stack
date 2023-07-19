import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToDoItemEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  @Column({ nullable: true })
  dueDate?: Date;

  @Column({ nullable: true })
  completedDate?: Date;
}
