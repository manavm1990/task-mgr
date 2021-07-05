import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAddingTask: boolean = false;
  title: String = '';

  constructor(private titleService: Title, private uiService: UiService) {}

  ngOnInit(): void {
    this.getTitle();
  }

  toggleAddTask(): void {
    // 'uiService.toggle' is triggered for subscribers on `btnClick()` from inside `uiService.toggleIsAddingTask()`
    this.uiService.toggleIsAddingTask().subscribe(
      // Get the new value of `isAddingTask` from `uiService`
      (value) => {
        this.isAddingTask = value;
      }
    );
  }

  private getTitle(): void {
    this.title = this.titleService.getTitle();
  }
}
