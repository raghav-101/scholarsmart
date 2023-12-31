import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scholarsMart';
  session: any;
  isSignedIn = false
  email = ""
  constructor(public firebaseService: FirebaseService){}
  message = ""
  ngOnInit(){
    if (localStorage.getItem("user") !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async signUp(email:string, password:string){
    await this.firebaseService.signUp(email, password)

    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async signIn(email:string, password:string){
    await this.firebaseService.signIn(email, password)

    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }
  nameDisplay(name: string){
      this.message = name;
    }
}
