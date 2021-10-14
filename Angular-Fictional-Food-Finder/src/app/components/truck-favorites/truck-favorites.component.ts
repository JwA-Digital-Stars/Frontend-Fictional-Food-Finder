import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-truck-favorites',
  templateUrl: './truck-favorites.component.html',
  styleUrls: ['./truck-favorites.component.css']
})
export class TruckFavoritesComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }

}
