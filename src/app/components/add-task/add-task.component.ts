import { Component, EventEmitter, Output } from '@angular/core';
import Task from 'src/app/Task';

const initModel: Task = { text: '', day: '', reminder: false };

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() taskAdd: EventEmitter<Task> = new EventEmitter<Task>();

  model: Task = initModel;

  onSubmit(): void {
    this.taskAdd.emit(this.model);
    this.model = initModel;
  }
}
