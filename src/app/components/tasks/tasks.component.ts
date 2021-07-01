import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import Task from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  showAddTasks: boolean = false;
  subscription: Subscription;
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((val) => {
      this.showAddTasks = val;
    });
  }

  ngOnInit(): void {
    this.initTasks();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((addedTask) => {
      this.tasks = [...this.tasks, addedTask];
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

  private initTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
