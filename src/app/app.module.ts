import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ProductPageComponent } from './product-page/product-page.component'
import {HttpClientModule} from '@angular/common/http';
import { MycartComponent } from './mycart/mycart.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductPageComponent,
    MycartComponent,
    LoginSignupComponent,
    HeaderComponent,
    CheckoutComponent,
    ThankYouComponent,
    CheckOrdersComponent,
    FooterComponent,
    AdminComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAupGpwto-DAM6xp5hq1HdHpA8opQgcuVQ",
      authDomain: "scholarsmart-37766.firebaseapp.com",
      projectId: "scholarsmart-37766",
      storageBucket: "scholarsmart-37766.appspot.com",
      messagingSenderId: "550524140253",
      appId: "1:550524140253:web:13629867b5fbd7b0f23934"
    }),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
