import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';

@Resolver()
export class TaskResolver {
  constructor(readonly taskService: TaskService) {}

  // Query to get all tasks
  @Query(() => [Task], { nullable: 'items' })
  getTasks() {
    return this.taskService.getTasks();
  }

  // Mutation to create a new task
  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Task {
    return this.taskService.createTask(createTaskInput);
  }
}
