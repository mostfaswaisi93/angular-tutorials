import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit, OnDestroy {
  enteredName = '';
  enteredDate = '';
  enteredStatus = '';
  enteredDescription = '';

  task: Task;
  isLoading = false;
  form: FormGroup;

  stClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];

  constructor(
    public tasksService: TasksService,
    public route: ActivatedRoute
  ) { }

  onAddTask(): any {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): any {
  }

}
