import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(id);
  }

}
