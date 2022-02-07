import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve<boolean> {
  constructor(private dashboard:DashboardService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.dashboard.getCategories()
  }
}
