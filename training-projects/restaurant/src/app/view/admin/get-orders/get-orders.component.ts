import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.scss']
})
export class GetOrdersComponent implements OnInit {

  orders:any[]
  displayedColumns: string[] = ['orderTime', 'status', 'price', 'recieve'];
  dataSource 
  
    constructor(private ordersService:OrdersService,private activatedRoute:ActivatedRoute) { 
      if (this.activatedRoute.snapshot.data.orders &&  this.activatedRoute.snapshot.data.orders.hasOwnProperty('recieveOrders')) {
        this.orders = this.activatedRoute.snapshot.data.orders.recieveOrders?.pickUpOrders
        this.dataSource=this.orders
        
      }
    }
  
    ngOnInit(): void {
    }

}
