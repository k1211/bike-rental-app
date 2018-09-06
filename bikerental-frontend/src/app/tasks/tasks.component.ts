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
  tasks = [];
  employees;
  idSort = 'up';
  prioritySort = 'up';
  typeSort = 'up';
  statusSort = 'up';
  taskTypes = ['Repair', 'Transport', 'Swapping battery'];
  status = ['New', 'In progress', 'Done'];
  priority = ['Low', 'High'];
  newFilter = {user: 'all', priority: 'all', task_type: 'all', status: 'all', show: false};
  currentUserId = 3;

  constructor(
    private taskService: TaskService,
    private dataService: DataService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.employees = users;
        this.getTasks();
      });
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  public applyFilter() {
    this.tasks = this.tasks.filter(this.customFilter.bind(this));
  }

  public customFilter(element) {
    let isApplicable = true;
    if (this.newFilter.priority !== 'all' && this.newFilter.priority !== null) {
      isApplicable = isApplicable && (element.priority == this.newFilter.priority);
    }
    if (this.newFilter.status !== 'all' && this.newFilter.status !== null) {
      isApplicable = isApplicable && (element.status == this.newFilter.status);
    }
    if (this.newFilter.task_type !== 'all' && this.newFilter.task_type !== null) {
      isApplicable = isApplicable && (element.task_type == this.newFilter.task_type);
    }
    if (this.newFilter.user !== 'all' && this.newFilter.user !== null) {
      isApplicable = isApplicable && (element.user == this.newFilter.user);
    }
    return isApplicable;
  }

  public clear() {
    this.getTasks();
  }

  public displayFilter() {
    this.newFilter.show = !this.newFilter.show;
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
      this.typeSort = 'down';
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
    if (this.isAdmin) {
      this.taskService.getTasks()
        .subscribe(tasks => {
          this.tasks = tasks;
          this.getEmployeeName(this.tasks, this.employees);
        });
    } else {
      this.taskService.getTaskByUser(this.currentUserId)
        .subscribe(tasks => {
          this.tasks = tasks;
          this.getEmployeeName(this.tasks, this.employees);
        });
    }
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
