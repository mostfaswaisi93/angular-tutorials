import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private tasksUpdated = new Subject<Task[]>();

  constructor(private http: HttpClient) { }

  getTasks(): any {
    this.http
      .get<{ message: string; tasks: any }>(
        'http://localhost:3000/api/tasks'
      )
      .pipe(map((taskData) => {
        return taskData.tasks.map(task => {
          return {
            name: task.name,
            date: task.date,
            status: task.status,
            description: task.description,
            id: task._id
          };
        });
      }))
      .subscribe(transformedTasks => {
        this.tasks = transformedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  getTaskUpdateListener(): any {
    return this.tasksUpdated.asObservable();
  }

  addTask(name: string, date: Date, status: string, description: string): any {
    const task: Task = { id: null, name, date, status, description };
    this.http
      .post<{ message: string, taskId: string }>('http://localhost:3000/api/tasks', task)
      .subscribe(responseData => {
        const id = responseData.taskId;
        task.id = id;
        this.tasks.push(task);
        this.tasksUpdated.next([...this.tasks]);
      });
  }

  deleteTask(taskId: string): any {
    this.http.delete('http://localhost:3000/api/tasks/' + taskId)
      .subscribe(() => {
        const updatedTasks = this.tasks.filter(task => task.id !== taskId);
        this.tasks = updatedTasks;
        this.tasksUpdated.next([...this.tasks]);
      });
  }

}
