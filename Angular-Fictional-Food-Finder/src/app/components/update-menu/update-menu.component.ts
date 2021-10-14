import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }

}
