import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EmployeesComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
