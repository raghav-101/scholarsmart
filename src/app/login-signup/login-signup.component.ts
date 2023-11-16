import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

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
  message=""
  public points_email = '';
  constructor(public firebaseService: FirebaseService, private router:Router){}
  ngOnInit(){
    if (localStorage.getItem("user") !== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async signUp(email:string, password:string){
    await this.firebaseService.signUp(email, password)
    this.message= email
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async signIn(email:string, password:string){
    await this.firebaseService.signIn(email, password)
    this.message= email
    if(this.firebaseService.isLoggedIn){
    this.isSignedIn = true}
    if(email=="martscholars@gmail.com")
    this.router.navigateByUrl('/scholarsmart')
  }

  handleLogout(){
    this.isSignedIn = false
  }

}
