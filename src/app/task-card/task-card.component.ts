import { Router } from '@angular/router';
import { TasksService } from './../tasks.service';
import { Task } from './../task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() task?: Task;
  expired = false;
  done = false;
  constructor(private taskService: TasksService, private router: Router) {}

  completeTask(e: Event): void {
    const checkbox = e.target as HTMLInputElement;
    if (this.task && checkbox != null) {
      this.done = checkbox.checked;
      this.setExpired(this.task);
      this.task.isDone = this.done;
      this.taskService.editTask(this.task, () => {});
    }
  }

  defineStatus(): void {
    if (this.task) {
      this.done = this.task.isDone;
      this.setExpired(this.task);
    }
  }

  setExpired(task: Task): void {
    if (!this.done) {
      this.expired = new Date(task.deadline) < new Date();
    } else {
      this.expired = false;
    }
  }

  delete() {
    if (this.task) {
      this.taskService.deleteTask(this.task.id, () => {
        this.router.navigateByUrl('/tasks');
      });
      this.task = undefined;
    }
  }

  ngOnInit() {
    this.defineStatus();
  }
}
