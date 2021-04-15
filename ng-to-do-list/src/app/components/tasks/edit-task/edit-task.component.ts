import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/models/status.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  // task: Task = {
  //   id: null,
  //   name: null,
  //   date: null,
  //   status: null,
  //   description: null
  // };
  task: Task;
  statusClass: Status[] = [
    { id: 1, name: 'New' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Completed' }
  ];
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.taskService.getTask(id);
    });
  }

  private getTask(id: number): any {
    if (id === 0) {
      this.task = {
        id: null,
        name: null,
        date: null,
        status: null,
        description: null
      };
    } else {
      this.task = this.taskService.getTask(id);
    }
  }

  saveTask(): void {
    this.taskService.save(this.task);
    this.router.navigate(['tasks']);
  }

}
