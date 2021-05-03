import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = '';
  newPost = 'No Content';
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(): any {
    this.newPost = this.enteredValue;
  // onAddPost(postInput: HTMLTextAreaElement): any {
    // console.log(postInput);
    // console.dir(postInput);
    // this.newPost = postInput.value;
    // this.newPost = 'The user\'s post';
    // alert('Post Added!');
  }

}
