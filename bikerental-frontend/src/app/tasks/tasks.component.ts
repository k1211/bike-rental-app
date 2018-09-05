import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
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
  idSort = 'up';
  prioritySort = 'up';
  typeSort = 'up';
  statusSort = 'up';

  constructor(
    private taskService: TaskService,
    private dataService: DataService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.employees = users;
        this.getTasks();
      });
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  public sortByID() {
    event.stopPropagation();
    if (this.idSort === 'down') {
      this.tasks.sort(function (a, b) {
        return a.id - b.id
      });
      this.idSort = 'up';
    } else {
      this.tasks.sort(function (a, b) {
        return b.id - a.id
      });
      this.idSort = 'down';
    }
  }

  public sortByStatus() {
    if (this.statusSort === 'down') {
      this.tasks.sort(function (a, b) {
        return (a.status).localeCompare(b.status);
      });
      this.statusSort = 'up';
    } else {
      this.tasks.sort(function (a, b) {
        return (b.status).localeCompare(a.status);
      });
      this.statusSort = 'down';
    }
  }

  public sortByTaskType() {
    if (this.typeSort === 'down') {
      this.tasks.sort(function (a, b) {
        return (a.task_type).localeCompare(b.task_type);
      });
      this.typeSort = 'up';
    } else {
      this.tasks.sort(function (a, b) {
        return (b.task_type).localeCompare(a.task_type);
      });
      this.typeSort= 'down';
    }
  }

  private sortByPriority() {
    if (this.prioritySort === 'down') {
      this.tasks.sort(function (a, b) {
        return (a.priority).localeCompare(b.priority);
      });
      this.prioritySort = 'up';
    } else {
      this.tasks.sort(function (a, b) {
        return (b.priority).localeCompare(a.priority);
      });
      this.prioritySort = 'down';
    }
  }


  public getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.getEmployeeName(this.tasks, this.employees);
      });
  }

  private getEmployeeName(tasks, employees) {
    for (let i = 0; i < tasks.length; i++) {
      let user_id = tasks[i].user;
      for (let j = 0; j < employees.length; j++) {
        if (this.employees[j].id == user_id) {
          tasks[i].user = employees[j].username;
        }
      }
    }
  }
}
