import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

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
  createTask(
    @Args('name') name: string,
    @Args('dueDate') dueDate: string,
    @Args('description', { nullable: true }) description?: string,
  ): Task {
    return this.taskService.createTask(name, dueDate, description);
  }
}
