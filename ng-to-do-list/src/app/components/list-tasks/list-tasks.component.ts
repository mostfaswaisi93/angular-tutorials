import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onShowTask(taskId: number): any{
    this.router.navigate(['/tasks', taskId]);
  }

}
