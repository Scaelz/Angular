import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../task';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
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

  ngOnInit(): void {}

  onSubmit(): void {
    const newTask: Task = {
      id: 0,
      title: this.checkoutForm.value.title,
      description: this.checkoutForm.value.description,
      deadline: this.checkoutForm.value.deadline,
      create_date: new Date(),
      isDone: false,
    };
    this.taskService.createTask(newTask, () => {
      this.router.navigateByUrl('/tasks');
    });
  }

  goBack(): void {
    this.location.back();
  }
}
