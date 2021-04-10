import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): any {
    this.userService.get().subscribe(data => {
      this.users = data;
    });
  }

}
