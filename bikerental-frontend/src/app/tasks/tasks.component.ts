import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  isAdmin = true;
  aTask: Task = {
    id : 1,
    priority : '1',
    description : '222',
    taskType : 'bla',
    status : 'new',
    user : 'kasia'
  };

  tasks: Task[] = [
    {
    id : 1,
    priority : '1',
    description : '222',
    taskType : 'bla',
    status : 'new',
    user : 'kasia'
  },
    {
    id : 2,
    priority : '1',
    description : '33ee33',
    taskType : 'bleea',
    status : 'neeew',
    user : null
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
