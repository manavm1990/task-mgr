import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Task from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private URL: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.URL}/${task.id}`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }
}
