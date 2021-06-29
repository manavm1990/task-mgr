import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import TASKS from '../mock-tasks';
import Task from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
