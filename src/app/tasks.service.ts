import { TASKS } from './mock-tasks';
import { Task } from './task';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = 'http://localhost:3000/';

  getTask(id: number): Observable<Task> {
    const hero = this.http.get(this.url + 'tasks/' + id) as Observable<Task>;
    console.log(
      hero.subscribe((task) => {
        console.log(task);
      })
    );

    return hero;
  }

  getTasks(): Observable<Task[]> {
    const tasks = this.http.get(this.url + 'tasks/') as Observable<Task[]>;
    return tasks;
  }

  editTask(newTaskData: Task, callback: Function): void {
    this.http
      .put(this.url + 'tasks/' + newTaskData.id, newTaskData)
      .subscribe(() => {
        callback();
      });
  }

  createTask(task: Task, callback: Function) {
    this.http.post(this.url + 'tasks/', task).subscribe(() => {
      callback();
    });
  }

  deleteTask(id: number, callback: Function) {
    this.http.delete(this.url + 'tasks/' + id).subscribe(() => {
      callback();
    });
  }
  constructor(private http: HttpClient) {}
}
