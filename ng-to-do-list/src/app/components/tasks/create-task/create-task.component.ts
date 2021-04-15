import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { TasksService } from 'src/app/services/tasks.service';

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

  addTaskForm = new FormGroup({
    name: this.name,
    date: this.date,
    status: this.status,
    description: this.description
  });

  statusClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];
  constructor(public tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  // saveTask(): void {
  //   this.tasksService.save(this.task);
  //   this.router.navigate(['tasks']);
  // }

  save(): any {
    this.tasksService.addTask(this.addTaskForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['tasks']);
      }
    });
  }

}
