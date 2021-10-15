import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Truck } from 'src/app/models/Truck';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-truck-finder',
  templateUrl: './truck-finder.component.html',
  styleUrls: ['./truck-finder.component.css']
})
export class TruckFinderComponent implements OnInit {

  constructor(private _location: Location, private truckService:TruckService) { }
  
  trucks: Truck[] = [];

  ngOnInit(): void {
    this.getTrucks();
  }

  getTrucks(): void{
    this.truckService.getAllTrucks().subscribe(trucks => this.trucks = trucks)
  }

  goBack(){
    this._location.back();
  }
}
