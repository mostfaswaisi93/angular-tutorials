import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  loadedFeature = 'recipe';

  onNavigate(feature: string): any {
    this.loadedFeature = feature;
  }

}
