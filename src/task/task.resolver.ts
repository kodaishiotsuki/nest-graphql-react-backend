import { Query, Resolver } from '@nestjs/graphql';
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
}
