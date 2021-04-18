import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http: HttpClient) { }

  getTasks(): any {
    return this.http.get('http://localhost:3000/tasks');
  }

  getTask(id): any {
    return this.http.get(`http://localhost:3000/tasks/${id}`);
  }

  addTask(task): any {
    return this.http.post('http://localhost:3000/tasks', task);
  }

  editTask(task): any {
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task);
  }

  deleteTask(id): any {
    return this.http.delete(`http://localhost:3000/tasks/${id}`);
  }

}
