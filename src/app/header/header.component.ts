import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../services/service/cart.service';
import { FirebaseService } from '../services/firebase.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() isLogout = new EventEmitter<void>()
  @Input() data:string | undefined
  public totalItem : number = 0;
  public searchTerm !: string;
  public totalPoints: number = 0
  constructor(private cartService : CartService, private firebaseservice: FirebaseService, private api:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res:any)=>{
      this.totalItem = res.length;

    })}
  
  logout(){
    this.firebaseservice.logout()

    this.isLogout.emit()
  }
 
}
