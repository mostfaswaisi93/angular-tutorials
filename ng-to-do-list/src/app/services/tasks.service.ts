import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() { }

  getTasks(): any {
    return [...this.tasks];
  }

  addTask(name: string, date: Date, status: string, description: string): any {
    const task: Task = { name, date, status, description };
    this.tasks.push(task);
  }

}
