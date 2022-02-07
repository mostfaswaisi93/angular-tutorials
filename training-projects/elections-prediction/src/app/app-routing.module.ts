import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProcessingComponent } from './processing/processing.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { JoeBidenComponent } from './joe-biden/joe-biden.component';
import { TrumpComponent } from './trump/trump.component';
import { MapComponent } from './map/map.component';
const islam:Routes=
    [
      {path:'' , redirectTo :'Home' , pathMatch:'full'},
			{path:'Home' ,component: HomeComponent},
      {path:'About',component: AboutComponent},
      {path:'Candidates',component: CandidatesComponent},
      {path:'Processing',component: ProcessingComponent},
      {path:'joe-biden',component: JoeBidenComponent},
      {path:'Trump',component: TrumpComponent},
      {path:'Map',component: MapComponent}
		]


@NgModule({
  imports: [RouterModule.forRoot(islam)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
