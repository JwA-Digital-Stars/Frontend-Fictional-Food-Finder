import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TruckFinderComponent } from './components/truck-finder/truck-finder.component';
import { TruckFavoritesComponent } from './components/truck-favorites/truck-favorites.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardOwnerComponent } from './components/dashboard-owner/dashboard-owner.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { RegisterOwnerComponent } from './components/register-owner/register-owner.component';
import { UpdateMenuComponent } from './components/update-menu/update-menu.component';
import { TruckDetailsComponent } from './components/truck-details/truck-details.component';
import { FormsModule } from '@angular/forms';
import { RegisterTruckComponent } from './components/register-truck/register-truck.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TruckFinderComponent,
    TruckFavoritesComponent,
    LogInComponent,
    DashboardOwnerComponent,
    RegisterCustomerComponent,
    RegisterOwnerComponent,
    UpdateMenuComponent,
    TruckDetailsComponent,
    RegisterTruckComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
