import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  getTasks(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnInit() {
    this.getTasks();
  }
  sortByDeadline(): void {
    this.tasks.sort(function (a, b) {
      if (a.deadline > b.deadline) {
        return 1;
      }
      if (a.deadline < b.deadline) {
        return -1;
      }
      return 0;
    });
  }
}
