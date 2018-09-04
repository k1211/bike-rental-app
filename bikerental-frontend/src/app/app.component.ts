import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAdmin = false;
  logged = true;
  loginLogout = 'Logout';

  constructor(
    private taskService: TaskService,
    private dataService: DataService
  ) { }

  ngOnInit() {
     this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }
}
