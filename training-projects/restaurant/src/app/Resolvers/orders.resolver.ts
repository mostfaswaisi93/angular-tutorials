import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrdersService } from '../services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersResolver implements Resolve<boolean> {
  constructor(private orders:OrdersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.orders.getOrders()
  }
}
