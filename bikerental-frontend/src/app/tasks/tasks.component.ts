import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() isAdmin;

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
