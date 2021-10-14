import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from 'src/app/components/dashboard/dashboard.component'
import { TruckFinderComponent } from './components/truck-finder/truck-finder.component';
import { TruckFavoritesComponent } from './components/truck-favorites/truck-favorites.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DashboardOwnerComponent } from './components/dashboard-owner/dashboard-owner.component';
import { RegisterCustomerComponent } from './components/register-customer/register-customer.component';
import { RegisterOwnerComponent } from './components/register-owner/register-owner.component';
import { UpdateMenuComponent } from './components/update-menu/update-menu.component';
import { TruckDetailsComponent } from './components/truck-details/truck-details.component';


const routes: Routes = [

  //this is the default path for the application. This can be changed to another component.
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  //this is the path for dashboard for the customer, this is more like a home.
  { path: 'dashboard', component: DashboardComponent },
  //path for TruckFinder component. Implemented with a routerLink @ dashboard.html
  {path: 'LocatingFoodTruck', component: TruckFinderComponent},
  //path for favorites component. Implemented with a routerLink @ dashboard.html
  {path: 'Favorites', component: TruckFavoritesComponent},
  // log in component for both customers and owners.
  {path: 'Login', component: LogInComponent},
  //Actual dashboard for owner
  {path: 'ownerDashboard', component: DashboardOwnerComponent},
  //register for customer
  {path: 'registerCustomer', component:RegisterCustomerComponent},
  //register for owner
  {path: 'registerOwner', component:RegisterOwnerComponent},
  //owner update food truck menu
  {path: 'UpdateMenu', component: UpdateMenuComponent},
  //detail for trucks *needs the detail/:truckname added
  {path: 'detail', component: TruckDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
