import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Task from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Output() deletedATask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() toggledATask: EventEmitter<Task> = new EventEmitter<Task>();

  // Guaranteed by parent `*ngIf`
  @Input() task!: Task;

  faTimes: IconDefinition = faTimes;

  onDelete(task: Task): void {
    // Emit this event to parent
    this.deletedATask.emit(task);
  }

  onToggle(task: Task): void {
    this.toggledATask.emit(task);
  }
}
