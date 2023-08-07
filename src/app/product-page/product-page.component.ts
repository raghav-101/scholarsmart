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
      this.productList = res.map((e:any)=>{
        const api = e.payload.doc.data();
        api.id = e.payload.doc.id;
        return api;
      })
      this.productList.forEach((a:any)=>{
        Object.assign(a, {quantity:1, total:Number(a.price)})
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
