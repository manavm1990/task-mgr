import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isAddingTask: boolean = false;
  private subject = new Subject<boolean>();

  toggleIsAddingTask(): Observable<boolean> {
    return new Observable((subscriber) => {
      this.isAddingTask = !this.isAddingTask;
      subscriber.next(this.isAddingTask);
    });
  }
}
