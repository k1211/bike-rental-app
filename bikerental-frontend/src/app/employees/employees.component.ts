import { Component, OnInit } from '@angular/core';
import { Employee } from "../employees";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [
      {
      id: 1,
      username: 'kasia',
      name: 'kasia',
      surname: 'bla',
      lastLogin: 'today',
      isAdmin: false
    },
        {
      id: 2,
      username: 'kasia',
      name: 'kasia',
      surname: 'bla',
      lastLogin: 'today',
      isAdmin: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
