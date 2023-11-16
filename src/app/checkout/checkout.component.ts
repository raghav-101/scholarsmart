import { Component } from '@angular/core';
import { CartService } from '../services/service/cart.service';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderInfo } from '../models/orderinfo';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public products : any = [];
  orderList: OrderInfo[] = [];
  orderObj: OrderInfo = {
    id: '',
    email_address: '',
    user_address: '',
    contact_details: '',
    grandTotal: 0,
    order_info: []
  }
  
  id : string = '';
  email_address: string = '';
  user_address: string = '';
  contact_details: string = ''
  order_info: [] | undefined;
  constructor (private cartService:CartService, private firestoreservice:ApiService){}
  public grandTotal !: number;
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  

  addOrder(){
    if (this.email_address == '' || this.user_address == '' || this.contact_details == ''){
      alert("Fill all input fields")
    }
    this.orderObj.id = '';
    this.orderObj.email_address = this.email_address;
    this.orderObj.user_address = this.user_address;
    this.orderObj.contact_details = this.contact_details;
    this.orderObj.order_info = this.products;
    this.orderObj.grandTotal = this.grandTotal;
    this.clearFields()
    this.firestoreservice.addOrder(this.orderObj)

  }
  updateUserPoints(email: any){ 
    this.firestoreservice.updateScholarPoints(this.grandTotal, email.value);
    this.cartService.removeAllCart();
  }
  clearFields(){
    this.id = '';
    this.email_address = '';
    this.user_address = '';
    this.contact_details = ''
  }

}
