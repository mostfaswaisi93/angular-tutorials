import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, name: 'Task One', date: new Date('10/25/1988'), status: '1', description: 'test' },
    { id: 2, name: 'Task Two', date: new Date('10/2/1988'), status: '1', description: 'test' },
    { id: 3, name: 'Task Three', date: new Date('10/1/1988'), status: '1', description: 'test' }
  ];
  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find(t => t.id === id);
  }

  deleteTask(id: number): any {
    const i = this.tasks.findIndex(e => e.id === id);
    if (i !== -1) {
      this.tasks.splice(i, 1);
    }
  }

  save(task: Task): any {
    this.tasks.push(task);
  }

}
