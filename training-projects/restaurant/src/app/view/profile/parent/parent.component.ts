import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  constructor(public authservice:AuthService) { 
    this.authservice.prepearUserData()
  }


  ngOnInit(): void {
  }

}
