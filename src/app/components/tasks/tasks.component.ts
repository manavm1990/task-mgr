import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import Task from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.initTasks();
  }

  initTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task2Delete: Task): void {
    this.taskService.deleteTask(task2Delete).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== task2Delete.id);
    });
  }

  toggleTaskReminder(task2Toggle: Task): void {
    // Mutation to task is already taken care of in taskService.toggleTaskReminder
    this.taskService.toggleTaskReminder(task2Toggle).subscribe();
  }
}
