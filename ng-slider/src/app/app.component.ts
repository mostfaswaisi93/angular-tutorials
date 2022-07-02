import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: any[] = [];
  preview: any = "";
  imgIndex!: number;

  constructor() { }
  ngOnInit(): void { }

  getImages(event: any) {
    let files = event.target.files;
    let sliderLength = this.images.length + files.length;
    if (sliderLength > 5) {
      let limit = 5 - this.images.length;
      for (let x = 0; x < limit; x++) {
        let file = files[x];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.images.push(reader.result);
        }
      }
    } else {
      for (let x = 0; x < files.length; x++) {
        let file = files[x];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push(reader.result);
        }
      }
    }
  }

  display(index: number) {
    this.imgIndex = index;;
    this.preview = this.images[index];
  }

  delete() {
    this.images.splice(this.imgIndex, 1);
    if (this.images.length == this.imgIndex) {
      --this.imgIndex;
      this.preview = this.images[this.imgIndex];
    } else {
      this.preview = this.images[this.imgIndex];
    }
  }

  minsImage() {
    --this.imgIndex;
    this.preview = this.images[this.imgIndex];
  }

  plusImage() {
    ++this.imgIndex;
    this.preview = this.images[this.imgIndex];
  }

}
