import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  isAdmin: boolean;
  newEmployee = {first_name:'', last_name:'', username:'', password: '', email: '', is_superuser: false};

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  onSubmit() {
    this.userService.createUser(this.newEmployee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
  }
}
