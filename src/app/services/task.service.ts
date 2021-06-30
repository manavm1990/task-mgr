import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Task from '../Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private URL: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.URL}/${task.id}`);
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    task.reminder = !task.reminder;
    return this.http.put<Task>(`${this.URL}/${task.id}`, task, httpOptions);
  }
}
