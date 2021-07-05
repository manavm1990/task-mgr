import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // ⚠️ Either give default text or mark as optional
  @Output() btnClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() color?: string;
  @Input() text: string = 'Click';

  onClick(): void {
    this.btnClick.emit();
  }
}
