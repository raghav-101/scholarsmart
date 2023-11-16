import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';
import { OrderInfo } from './models/orderinfo';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public user: any;
  i = 0;
  constructor(private firestoreservice:AngularFirestore) { }
  totalPoints = 0;
  updatedPoints = 0;
  email = ''
  userObj : User = {
    id: '',
    email: '',
    scholar_points: 0
  }
  scholar_points = 0;
  id = '';
  getProducts(){
    return this.firestoreservice
    .collection("/products")
    .snapshotChanges();
  }
  getPoints(email: string){
    return this.firestoreservice
    .collection("/users").doc(email).get();
  }
  addOrder(orderInfo: OrderInfo){ 
    orderInfo.id = this.firestoreservice.createId();
    return this.firestoreservice.collection("/orders").add(orderInfo)
  }
  deleteUser(id: string){
    return this.firestoreservice.doc('/users/'+id).delete();
  }
  updateScholarPoints(pointsToBeDeducted: number, email: string){
  //   this.getPoints()
  //   .subscribe(res=>{
  //     this.userList = res.map((e:any)=>{
  //       const api = e.payload.doc.data();
  //       api.id = e.payload.doc.id = this.id;
  //       api.scholar_points = e.payload.doc.scholar_points;
  //       this.updatedPoints = api.scholar_points - pointsToBeDeducted;
  //       return api; 
  //     })
  // })

  // this.deleteUser(user);
  // console.log(this.userObj);
  // return this.firestoreservice.collection("/users").add(this.userObj);
  this.getPoints(email)
  .subscribe(res=>{

    this.user = res.data()
    this.email = this.user.email;
    this.id = this.user.id;
    this.updatedPoints = this.user.scholar_points - pointsToBeDeducted
    console.log(this.updatedPoints)
    this.userObj.email = this.email
    this.userObj.scholar_points = this.updatedPoints
    this.userObj.id = '';
    this.deleteUser(this.id);
    this.addUser(this.userObj)
    return this.user
    
  })
  
}
addScholarPoints(pointsToBeAdded: number, email: string){
  this.getPoints(email)
  .subscribe(res=>{

    this.user = res.data()
    this.email = this.user.email;
    this.id = this.user.id;
    this.updatedPoints = +this.user.scholar_points + pointsToBeAdded
    console.log(this.updatedPoints)
    this.userObj.email = this.email
    this.userObj.scholar_points = this.updatedPoints
    this.userObj.id = '';
    this.deleteUser(this.id);
    this.addUser(this.userObj)
    return this.user
    
  })
  
}
addUser(user: User){
  user.id = this.firestoreservice.createId();
  return this.firestoreservice.collection("/users").doc(user.email).set(this.userObj);
}
}
