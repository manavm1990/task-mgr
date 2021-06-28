import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // ⚠️ Either give default text or mark as optional
  @Input() color?: string;
  @Input() text: string = 'Click';
}
