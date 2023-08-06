import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MycartComponent } from './mycart/mycart.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';


const routes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'cart', component: MycartComponent},
  {path: 'login', component: LoginSignupComponent},
  {path:'', redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
