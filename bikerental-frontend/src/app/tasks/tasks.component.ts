import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() isAdmin;

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
    description : 'Pro labores volutpat urbanitas an. Eos ad aliquid meliore ceteros, rebum malis pro eu. Sensibus corrumpit pertinacia qui ad. Eum ne reque laoreet erroribus, eripuit ceteros assueverit qui eu. Duo et iusto principes adversarium.',
    taskType : 'bleea',
    status : 'neeew',
    user : null
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
