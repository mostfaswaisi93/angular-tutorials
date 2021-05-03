import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'mean-stack';
  storedPosts: Post[] = [];

  onPostAdded(post): any {
    this.storedPosts.push(post);
  }
}
