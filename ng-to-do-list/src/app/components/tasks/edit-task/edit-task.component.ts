import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task;
  name = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);

  editTaskForm = new FormGroup({
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
  constructor(public tasksService: TasksService, public router: Router, public activatedRoute: ActivatedRoute) {
    this.tasksService
      .getTask(this.activatedRoute.snapshot.params.id)
      // .getTask(this.activatedRoute.snapshot.params['id'])
      .subscribe(data => {
        this.task = data;
        this.name.setValue(this.task.name);
        this.date.setValue(this.task.date);
        this.status.setValue(this.task.status);
        this.description.setValue(this.task.description);

        // this.editTaskForm.setValue(data);
      });
  }

  save(): any {
    this.tasksService.editTask(this.editTaskForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['tasks']);
      }
    });
  }

  ngOnInit(): void {
  }

}
