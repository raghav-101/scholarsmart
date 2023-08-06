import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { FirebaseService } from '../services/firebase.service';
import { CartService } from '../services/service/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  public productList:any;
  @Output() isLogout = new EventEmitter<void>()
  constructor(private api:ApiService, private firebaseservice: FirebaseService, private cartservice: CartService){}

  ngOnInit(): void{
    this.api.getProducts()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any)=>{
        Object.assign(a, {quantity:1, total:a.price})
      })
    })
  }
  logout(){
    this.firebaseservice.logout()

    this.isLogout.emit()
  }
  addToCart(item: any){
    this.cartservice.addToCart(item);
  }

}
