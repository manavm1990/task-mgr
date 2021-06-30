import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private titleService: Title, private taskService: TaskService) {}

  title: String = '';

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle() {
    this.title = this.titleService.getTitle();
  }

  addTask() {
    // TODO: Use task service to addTask
    console.log('➕');
  }
}
