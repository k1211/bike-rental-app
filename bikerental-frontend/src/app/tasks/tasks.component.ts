import {Component, OnInit} from '@angular/core';
import { TaskService } from "../task.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isAdmin: boolean = false;
  tasks: Object;

  constructor(
    private taskService: TaskService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getTasks();
    this.dataService.currentIsAdminStatus.subscribe(isAdmin => this.isAdmin = isAdmin);
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
