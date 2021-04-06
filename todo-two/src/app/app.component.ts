import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-two';
  todos: Todo[] = [];
  newTodo: Todo = new Todo();
  lastId = 0;

  add(): void {
    this.newTodo.id = ++this.lastId;
    this.todos.push(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleDone(todo: Todo): void {
    for (const t of this.todos) {
      if (t.id === todo.id) {
        t.isDone = !todo.isDone;
      }
    }
  }
}
