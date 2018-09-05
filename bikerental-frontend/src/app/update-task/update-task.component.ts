import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../data.service";
import {UserService} from "../user.service";


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task;
  taskID: string;
  status = ['New', 'In progress', 'Done'];
  employees = [''];
  isAdmin: boolean;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
    this.taskID = this.route.snapshot.paramMap.get('id');
    this.taskService.getTasksByID(this.taskID)
      .subscribe(task => {this.task = task[0]});
    this.userService.getUsers()
      .subscribe(users => {this.getEmployees(users)});
  }

  getEmployees(users) {
    for(let i=0; i < users.length; i++) {
      this.employees.push(users[i].username);
    }
  }

}
