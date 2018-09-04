import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TasksComponent} from "./tasks/tasks.component";
import {EmployeesComponent} from "./employees/employees.component";

const routes: Routes = [
  { path: '', component: TasksComponent},
  { path: 'employees', component: EmployeesComponent }
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
