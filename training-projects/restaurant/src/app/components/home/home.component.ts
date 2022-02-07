import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: { image: string }[] = [];
  activeSlideIndex = 0;
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
   }

  ngOnInit(): void {
  }
  addSlide(): void {
    this.slides.push({
      image: `assets/${this.slides.length % 8 + 1}.jpg`
    });
  }
 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }
}
