import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false

  constructor(public firebaseAuth: AngularFireAuth, private router : Router) { }

  async signIn(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      localStorage.setItem('user', JSON.stringify(res.user))
      this.isLoggedIn = true
    })
  }

  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  forgotPassword(email: string){
    this.firebaseAuth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verify-email']);
    },
    err=>{
      alert('Something went wrong')
    })
  }

}
