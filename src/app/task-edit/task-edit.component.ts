import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent implements OnInit {
  task?: Task;
  checkoutForm = this.formBuilder.group({
    title: new FormControl('', Validators.required),
    description: '',
    deadline: '',
  });
  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('taskID');
    if (id != null) {
      this.taskService.getTask(+id).subscribe((task) => {
        this.task = task;
        this.checkoutForm.patchValue({
          title: this.task?.title,
          description: this.task?.description,
          deadline: this.task?.deadline,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.task) {
      const editedTask: Task = {
        id: this.task.id,
        title: this.checkoutForm.value.title,
        description: this.checkoutForm.value.description,
        deadline: this.checkoutForm.value.deadline,
        create_date: this.task.create_date,
        isDone: this.task.isDone,
      };
      this.taskService.editTask(editedTask, () => {
        this.router.navigateByUrl('/tasks');
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
