import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {ActivatedRoute, Router} from '@angular/router';
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
  updatedEmployee;
  updatedStatus;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
    this.taskID = this.route.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe(users => {
        this.getEmployees(users);
        this.taskService.getTaskByID(this.taskID)
          .subscribe(task => {
            this.task = task[0] ;
            this.updatedEmployee = this.task.user;
            this.updatedStatus = this.task.status;
          });
      });
  }

  getEmployees(users) {
    for(let i=0; i < users.length; i++) {
      this.employees.push(users[i]);
    }
  }

  onSubmit() {
    let updatedTask = {id: this.taskID, status: this.updatedStatus, user: this.updatedEmployee};
    this.taskService.updateTask(updatedTask)
      .subscribe(() => {
        this.router.navigate(['/tasks']);
      });
  }

}
