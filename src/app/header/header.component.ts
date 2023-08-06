import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../services/service/cart.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() isLogout = new EventEmitter<void>()
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, private firebaseservice: FirebaseService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  logout(){
    this.firebaseservice.logout()

    this.isLogout.emit()
  }
}
