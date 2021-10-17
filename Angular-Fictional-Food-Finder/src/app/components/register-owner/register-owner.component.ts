import { Component, OnInit } from '@angular/core';

import { TruckOwner } from 'src/app/models/TruckOwner';
import { TruckPost } from 'src/app/models/TruckPost';
import { OwnerRegisterService } from 'src/app/services/owner-register.service';


@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  constructor(private ownerRegisterService: OwnerRegisterService) { }

  ngOnInit(): void {
  }

  registerOwner(email:string, password:string, name:string): void{
    
    this.ownerRegisterService.register({email,password,name} as TruckOwner).subscribe();
  }



  

}
