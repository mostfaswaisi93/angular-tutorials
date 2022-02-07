import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 
  constructor(private dashboard:DashboardService,private router:Router) { 
    this.dashboard.showNavBar=false
 }

 ngOnInit(): void {
 }
 ngOnDestroy() {this.dashboard.showNavBar=true}
 navigate() {
   this.dashboard.getCategoriesNames().subscribe((res:any) => {
     this.dashboard.categoriesNames=res.categoriesNames
     this.router.navigate([`/home`])
   }, err => alert(err.error.message))
  

 }

}
