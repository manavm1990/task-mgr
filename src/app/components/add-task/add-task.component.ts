import { Component, EventEmitter, Output } from '@angular/core';
import Task from 'src/app/Task';

const initModel: Task = { text: '', day: '', reminder: false };

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() addedATask: EventEmitter<Task> = new EventEmitter<Task>();
  model: Task = initModel;

  onSubmit() {
    this.addedATask.emit(this.model);
    this.model = initModel;
  }
}
