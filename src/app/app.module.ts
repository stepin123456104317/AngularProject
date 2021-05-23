import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{MatSidenavModule} from '@angular/material/sidenav';
import { FusionChartsModule } from 'angular2-fusioncharts';
import {NgApexchartsModule} from 'ng-apexcharts'
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { MoviesComponent } from './movies/movies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MovieentryComponent } from './movieentry/movieentry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
// import { ChartsModule } from 'ng2-charts';
// import{Chart} from 'node_modules/chart.js'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    ContactusComponent,
    MovieentryComponent,
    CartComponent,
    MoviedetailsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    NgxChartsModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
