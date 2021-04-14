import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  addEventForm = new FormGroup({
    name: this.name,
    date: this.date,
    status: this.status,
    description: this.description
  });

  task: Task = {
    id: null,
    name: null,
    date: null,
    status: null,
    description: null
  };

  statusClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];
  constructor(private taskService: TaskService, private router: Router) { }

  saveTask(): void {
    this.taskService.save(this.task);
    this.router.navigate(['list']);
  }


  ngOnInit(): void {
  }

}
