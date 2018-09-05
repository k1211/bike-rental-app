import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {UserService} from "../user.service";
import {TaskService} from "../task.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  isAdmin: boolean;
  taskTypes = ['Repair', 'Transport', 'Swapping battery'];
  status = ['New', 'In progress', 'Done'];
  priority = ['Low', 'High'];
  submitted = false;
  employees = [''];
  newTask = {priority: 'Low', description: '', task_type: 'Repair', user: this.employees[1], status:'New'};

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
    this.userService.getUsers()
      .subscribe(users => {this.getEmployees(users)});
  }

  getEmployees(users) {
    for(let i=0; i < users.length; i++) {
      this.employees.push(users[i]);
    }
  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.newTask));
    this.taskService.createTask(this.newTask)
      .subscribe(() => {
        this.router.navigate(['/tasks']);
      });
  }
}
