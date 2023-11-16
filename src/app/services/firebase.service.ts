import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth, private router : Router, private firestoreservice:AngularFirestore) { }
  userObj : User = {
    id: '',
    email: '',
    scholar_points: 9999999
  }
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
    this.userObj.email =  email
    this.userObj.id = '';
    this.userObj.scholar_points = 0;
    this.addUser(this.userObj)
  }
  addUser(user: User){
    user.id = this.firestoreservice.createId();
    return this.firestoreservice.collection("/users").doc(user.email).set(this.userObj);
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
