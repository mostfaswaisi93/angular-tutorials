import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  isLoading = false;
  private tasksSub: Subscription;
  displayedColumns: string[] = ['name', 'date', 'status', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): any {
    this.dataSource.sort = this.sort;
  }

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.tasksService.getTasks();
    this.tasksSub = this.tasksService.getTaskUpdateListener()
      .subscribe((tasks: Task[]) => {
        this.isLoading = false;
        this.tasks = tasks;
      });
  }

  onDelete(taskId: string): any {
    if (confirm('Are you sure to delete it?')) {
      this.tasksService.deleteTask(taskId);
    }
  }

  ngOnDestroy(): any {
    this.tasksSub.unsubscribe();
  }

}
