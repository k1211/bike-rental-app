import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent} from "./tasks/tasks.component";
import {EmployeesComponent} from "./employees/employees.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {CreateTaskComponent} from "./create-task/create-task.component";

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/add', component: CreateTaskComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/add', component: CreateEmployeeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
