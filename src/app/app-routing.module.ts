import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserListComponent } from './user-list-component/user-list-component.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users', component: UserListComponent
  },

 

 

  {
    path: 'users', component: ProductComponent

  },
  {
    path: 'product/:id', component: ProductComponent

  },
{
  path: 'cart', component: CartComponent
},
{
  path: 'checkout', component: CheckoutComponent
},
{
  path: '',
  component: InputUserDataFormComponent
},
{
  path: 'user/:uid',
  component: DisplayUserDataComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
