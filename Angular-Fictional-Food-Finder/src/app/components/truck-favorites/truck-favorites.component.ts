import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Truck } from 'src/app/models/Truck';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-truck-favorites',
  templateUrl: './truck-favorites.component.html',
  styleUrls: ['./truck-favorites.component.css']
})
export class TruckFavoritesComponent implements OnInit {

  constructor(private _location: Location, private truckService:TruckService) { }
  favoriteTrucks: Truck[] = [];

  ngOnInit(): void {
  }

  getFavorites(): void{
    this.truckService.getFavoriteTrucks().subscribe(favoriteTrucks => this.favoriteTrucks = favoriteTrucks)
  }

  goBack(){
    this._location.back();
  }

}
