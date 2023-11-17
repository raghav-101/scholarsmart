import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MycartComponent } from './mycart/mycart.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'cart', component: MycartComponent},
  {path: 'login', component: LoginSignupComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'thank-you', component: ThankYouComponent},
  {path: 'check-orders', component: CheckOrdersComponent},
  {path: 'scholarsmart', component: AdminComponent},
  {path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
