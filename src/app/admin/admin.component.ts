import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../services/service/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  form: FormGroup = this.fb.group({
    email: [''],
    scholarpoints: ['']
  });
  constructor (private cartService:CartService, private firestoreservice:ApiService, private fb: FormBuilder){}
  pointsToBeAdded = 0;
  
  updateUserPoints(email:string, points:any){ 
    this.pointsToBeAdded = parseInt(points)
    this.firestoreservice.addScholarPoints(this.pointsToBeAdded, email);
    this.form.reset();
  }
  
}
