import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Task from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() deletedATask: EventEmitter<Task> = new EventEmitter<Task>();

  faTimes = faTimes;

  onDelete(task: Task) {
    // Emit this event to parent
    this.deletedATask.emit(task);
  }
}
