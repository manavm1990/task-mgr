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
    // Subscription is triggered when the user clicks the button
    this.uiService.toggleIsAddingTask().subscribe((value) => {
      this.isAddingTask = value;
    });
  }

  private getTitle(): void {
    this.title = this.titleService.getTitle();
  }
}
