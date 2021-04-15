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
  task: Task;
  tasks: Task[];
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  showTask(taskId: number): any {
    this.router.navigate(['/tasks', taskId]);
  }

  editTask(taskId: number): any {
    this.router.navigate(['/tasks/edit', taskId]);
  }

  deleteTask(id: number): any {
    if (confirm('Are you sure to delete?')) {
      this.taskService.deleteTask(id).subscribe();
    }
  }

}
