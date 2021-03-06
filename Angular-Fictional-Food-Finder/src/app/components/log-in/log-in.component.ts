import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/Customer';
import { TruckOwner } from 'src/app/models/TruckOwner';
import { CustomerLogin } from 'src/app/models/CustomerLogin';
import { OwnerLogin } from 'src/app/models/OwnerLogin';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }



  login(email:string, password:string, selection:string): void{
    
    if(!email){return;}

    if(selection === 'customer'){
    this.loginService.verifyLoginCustomer({email,password} as CustomerLogin).subscribe();
    }

    if(selection === 'owner'){
      this.loginService.verifyLoginOwner({email,password} as OwnerLogin).subscribe();
      }
  }
}
