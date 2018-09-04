import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskTypes = ['Repair', 'Transport', 'Swapping battery'];
  status = ['New', 'In progress', 'Done'];
  priority = ['Low', 'High'];
  submitted = false;
  employees = [''];
  newTask = {priority: 'low', description: '', task_type: 'repair', user: '', status:'new'};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }
}
