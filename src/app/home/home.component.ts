import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  @Input() data:string | undefined
  @Output() isLogout = new EventEmitter<void>()
  constructor (public firebaseservice: FirebaseService) {}
  session: any;
  logout(){
    this.firebaseservice.logout()

    this.isLogout.emit()
  }

}
