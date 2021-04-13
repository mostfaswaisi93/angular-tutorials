import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[] = [
    { id: 1, name: 'Ahmad', date: new Date('10/25/1988'), status: 'new', description: 'test' },
    { id: 2, name: 'Hani', date: new Date('10/2/1988'), status: 'new', description: 'test' },
    { id: 3, name: 'Lama', date: new Date('10/1/1988'), status: 'new', description: 'test' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
