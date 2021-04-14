import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    { id: 1, name: 'Ahmad', date: new Date('10/25/1988'), status: '1', description: 'test' },
    { id: 2, name: 'Hani', date: new Date('10/2/1988'), status: '1', description: 'test' },
    { id: 3, name: 'Lama', date: new Date('10/1/1988'), status: '1', description: 'test' }
  ];
  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find(t => t.id === id);
  }

  save(task: Task): any {
    this.tasks.push(task);
  }

}
