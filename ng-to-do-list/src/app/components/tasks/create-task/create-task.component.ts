import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Status } from 'src/app/models/status.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  name = '';
  date = '';
  status = '1';
  description = '';

  statusClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];

  saveTask(taskForm: NgForm): void {
    console.log(taskForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
