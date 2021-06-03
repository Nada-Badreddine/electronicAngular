import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';

import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductComponent} from './components/product/product.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

import {ToastrModule} from 'ngx-toastr';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { UserListComponent } from './user-list-component/user-list-component.component';
import { UserService } from './services/UserService';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    
    ToastrModule.forRoot()

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}