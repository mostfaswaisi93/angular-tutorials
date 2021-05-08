import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  // form: FormGroup;
  private mode = 'create';
  private taskId: string;

  stClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];

  constructor(
    public tasksService: TasksService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('taskId')) {
        this.mode = 'edit';
        this.taskId = paramMap.get('taskId');
        this.isLoading = true;
        this.tasksService.getTask(this.taskId).subscribe(taskData => {
          this.isLoading = false;
          // tslint:disable-next-line:max-line-length
          this.task = { id: taskData._id, name: taskData.name, date: taskData.date, status: taskData.status, description: taskData.description };
        });
      } else {
        this.mode = 'create';
        this.taskId = null;
      }
    });
  }

  onSaveTask(form: NgForm): any {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.tasksService.addTask(form.value.name, form.value.date, form.value.status, form.value.description);
    } else {
      this.tasksService.updateTask(
        this.taskId,
        form.value.name,
        form.value.date,
        form.value.status,
        form.value.description
      );
    }
    form.resetForm();
  }

  ngOnDestroy(): any {
  }

}
