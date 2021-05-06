import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient) { }

  getTasks(): any {
    this.http
      .get<{ message: string; tasks: Task[] }>(
        'http://localhost:3000/api/tasks'
      )
      .subscribe(taskData => {
        this.tasks = taskData.tasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTaskUpdateListener(): any {
    return this.tasksUpdated.asObservable();
  }

  addTask(name: string, date: Date, status: string, description: string): any {
    const task: Task = { id: null, name, date, status, description };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/tasks', task)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
      });
  }

}
