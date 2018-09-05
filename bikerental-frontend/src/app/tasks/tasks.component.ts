import {Component, OnInit} from '@angular/core';
import { TaskService } from "../task.service";
import {DataService} from "../data.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isAdmin: boolean = false;
  tasks;
  employees;

  constructor(
    private taskService: TaskService,
    private dataService: DataService,
    private userServie: UserService
  ) { }

  ngOnInit() {
    this.userServie.getUsers()
      .subscribe(users => {
        this.employees = users;
        this.getTasks();
      });
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        alert("hej");
        this.getEmployeeName(this.tasks, this.employees);
        alert("ho");
      });
  }

  private getEmployeeName(tasks, employees) {
    for(let i=0; i < tasks.length; i++) {
      let user_id = tasks[i].user;
      for(let j=0; j < employees.length; j++) {
        if(this.employees[j].id == user_id) {
          tasks[i].user = employees[j].username;
        }
      }
    }
  }
}
