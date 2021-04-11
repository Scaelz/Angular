import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tasks' },
  {
    path: 'tasks',
    component: TasksListComponent,
  },
  {
    path: 'edit/:taskID',
    component: TaskEditComponent,
  },
  {
    path: 'create',
    component: CreateTaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
