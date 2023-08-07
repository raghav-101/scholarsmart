import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/user';

@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.css']
})
export class CheckOrdersComponent {
  constructor(private api: ApiService){}
  orders : any;
  id = '';
  email_address = '';
  user_address = '';
  grandtotal = '';
  order_info = '';
  showOrders(email: any){
    this.api.getPoints(email.value)
    .subscribe(res=>{
      this.orders = res.data();
    }
      
    )
  }
}

