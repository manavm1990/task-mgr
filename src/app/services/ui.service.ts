import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isAddingTask: boolean = false;
  private subject = new Subject<boolean>();

  addTaskStatus(): Observable<boolean> {
    return new Observable((subscriber) => {
      subscriber.next(this.isAddingTask);
    });
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  toggleIsAddingTask(): Observable<boolean> {
    return new Observable((subscriber) => {
      this.isAddingTask = !this.isAddingTask;

      // Any component that triggers this method will be notified
      subscriber.next(this.isAddingTask);

      // Notify all other components (that don't trigger this method)
      this.subject.next(this.isAddingTask);
    });
  }
}
