import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { SuccessComponent } from './components/success/success.component';
import { BuynowComponent } from './components/buynow/buynow.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { JewelleryComponent } from './components/jewellery/jewellery.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { SportsComponent } from './components/sports/sports.component';
import { LiquorsComponent } from './components/liquors/liquors.component';
import { BooksComponent } from './components/books/books.component';
import { BeautyComponent } from './components/beauty/beauty.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    SuccessComponent,
    BuynowComponent,
    ElectronicsComponent,
    FashionComponent,
    JewelleryComponent,
    KitchenComponent,
    SportsComponent,
    LiquorsComponent,
    BooksComponent,
    BeautyComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }