import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    // const task1 = new Task();
    // task1.id = 1;
    // task1.name = 'Task 1';
    // task1.dueDate = '2021-12-31';
    // task1.status = 'NOT_STARTED';
    // task1.description = 'This is the first task';
    // this.tasks.push(task1);
    return this.tasks;
  }

  createTask(name: string, dueDate: string, description?: string): Task {
    const newTask = new Task();
    newTask.id = this.tasks.length + 1;
    newTask.name = name;
    newTask.dueDate = dueDate;
    newTask.status = 'NOT_STARTED';
    newTask.description = description;
    this.tasks.push(newTask);
    return newTask;
  }
}
