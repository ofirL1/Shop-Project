import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { RegisterComponent } from './components/auth-area/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './components/layout-area/about/about.component';
import { HomeComponent } from './components/layout-area/home/home.component';
import { ShopInformationComponent } from './components/layout-area/shop-information/shop-information.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ProductsListComponent } from './components/shopping-cart-area/products-list/products-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import { CartComponent } from './components/shopping-cart-area/cart/cart.component';
import { ShoppingCartComponent } from './components/shopping-cart-area/shopping-cart/shopping-cart.component';
import { ProductCardComponent } from './components/shopping-cart-area/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AuthMenuComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    HomeComponent,
    ShopInformationComponent,
    ProductsListComponent,
    CartComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, // Register the interceptor
    useClass: JwtInterceptor, // Our interceptor class
    multi: true // Can register it several times if needed
}],

  bootstrap: [LayoutComponent]
})
export class AppModule { }
