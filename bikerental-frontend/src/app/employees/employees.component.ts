import { Component, OnInit } from '@angular/core';
import { Employee } from "../employees";
import {DataService} from "../data.service";
import {UserService} from "../user.service";


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  isAdmin: boolean;
  employees: Employee[] = [];

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
    this.userService.getUsers()
      .subscribe(users => {
        this.getEmployees(users);
      });
  }

  getEmployees(users) {
    for(let i=0; i < users.length; i++) {
      this.employees.push(users[i]);
    }
  }

}
