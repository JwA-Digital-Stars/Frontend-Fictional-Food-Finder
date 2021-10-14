import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-truck-finder',
  templateUrl: './truck-finder.component.html',
  styleUrls: ['./truck-finder.component.css']
})
export class TruckFinderComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }
}
