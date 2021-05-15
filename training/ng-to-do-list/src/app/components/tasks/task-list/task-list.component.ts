import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalTasks = 0;
  tasksPerPage = 5;
  currentPage = 1;
  pageSizeOptions = [5, 10, 15, 50];
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
    this.tasksService.getTasks(this.tasksPerPage, this.currentPage);
    this.tasksSub = this.tasksService.getTaskUpdateListener()
      .subscribe((taskData: { tasks: Task[], taskCount: number }) => {
        this.isLoading = false;
        this.totalTasks = taskData.taskCount;
        this.tasks = taskData.tasks;
      });
  }

  onChangedPage(pageData: PageEvent): any {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.tasksPerPage = pageData.pageSize;
    this.tasksService.getTasks(this.tasksPerPage, this.currentPage);
  }

  onDelete(taskId: string): any {
    if (confirm('Are you sure to delete it?')) {
      this.tasksService.deleteTask(taskId);
      this.isLoading = true;
      this.tasksService.deleteTask(taskId).subscribe(() => {
        this.tasksService.getTasks(this.tasksPerPage, this.currentPage);
      });
    }
  }

  ngOnDestroy(): any {
    this.tasksSub.unsubscribe();
  }

}
