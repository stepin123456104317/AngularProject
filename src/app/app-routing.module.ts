import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import{Router} from '@angular/router'
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MovieentryComponent } from './movieentry/movieentry.component';
import { CartComponent } from './cart/cart.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'movies',component:MoviesComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'movieentry',component:MovieentryComponent},
  {path:'cart',component:CartComponent},
  {path:'moviedetails',component:MoviedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
