import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: String = '';
  isAddingTask: boolean = false;

  constructor(private titleService: Title, private uiService: UiService) {}

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle() {
    this.title = this.titleService.getTitle();
  }

  toggleAddTask() {
    // Subscription is triggered when the user clicks the button
    this.uiService.toggleIsAddingTask().subscribe((value) => {
      this.isAddingTask = value;
    });
  }
}
