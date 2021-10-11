import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from 'src/app/components/dashboard/dashboard.component'
import { TruckFinderComponent } from './components/truck-finder/truck-finder.component';
import { TruckFavoritesComponent } from './components/truck-favorites/truck-favorites.component';
const routes: Routes = [

  //this is the default path for the application. This can be changed to another component.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //this is the path for dashboard
  { path: 'dashboard', component: DashboardComponent },
  //path for TruckFinder component. Implemented with a routerLink @ dashboard.html
  {path: 'LocatingFoodTruck', component: TruckFinderComponent},
  //path for favorites component. Implemented with a routerLink @ dashboard.html
  {path: 'Favorites', component: TruckFavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
