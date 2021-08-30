import { HomeComponent } from './components/layout-area/home/home.component';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-area/login/login.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { ShoppingCartComponent } from './components/shopping-cart-area/shopping-cart/shopping-cart.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: "login", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "logout", component: LogoutComponent},
  {path: "home", component: HomeComponent},
  {path: "shopping-cart",canActivate: [AuthGuard], component: ShoppingCartComponent},
  { path: "", redirectTo: "/login", pathMatch: "full" }, // pathMath: "full" --> exact
  {path: "**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
