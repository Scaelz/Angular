import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [	
    AppComponent,
    TasksListComponent,
    TaskCardComponent,
    TaskEditComponent,
      CreateTaskComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
