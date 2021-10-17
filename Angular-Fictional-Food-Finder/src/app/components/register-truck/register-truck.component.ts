import { Component, OnInit } from '@angular/core';
import { TruckPost } from 'src/app/models/TruckPost';
import { OwnerRegisterService } from 'src/app/services/owner-register.service';

@Component({
  selector: 'app-register-truck',
  templateUrl: './register-truck.component.html',
  styleUrls: ['./register-truck.component.css']
})
export class RegisterTruckComponent implements OnInit {

  constructor(private ownerRegisterService: OwnerRegisterService) { }

  ngOnInit(): void {
  }

  registerTruck(name:string , email:string): void{
    this.ownerRegisterService.registerTruck(name,email).subscribe();
  }

}
