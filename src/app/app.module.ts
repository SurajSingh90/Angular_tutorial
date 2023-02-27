import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BookComponent } from './book/book.component';
import { BookModule } from './book/book.module';
import { BookchildComponent } from './bookchild/bookchild.component';
import { CartComponent } from './cart/cart.component';
// import { Bookpart2Component } from './bookpart2/bookpart2.component';
import {RouteRoutingModule} from './route/route-routing.module'
// import {RouteModule}  from './route/route.module'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookchildComponent,
    CartComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouteModule
    RouteRoutingModule,
    AuthModule
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
