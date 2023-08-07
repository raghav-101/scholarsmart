import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {
  title = 'scholarsMart';
  session: any;
  public isSignedIn = false
  email = ""
  public points_email = '';
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
