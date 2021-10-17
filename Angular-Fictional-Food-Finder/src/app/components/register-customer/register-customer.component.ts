import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Truck } from 'src/app/models/Truck';
import { CustomerRegisterService } from 'src/app/services/customer-register.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  constructor(private CustomerRegisterService:CustomerRegisterService) { }

  ngOnInit(): void {
  }

  

  registerCustomer(email:string, password:string, name:string): void{
    
    this.CustomerRegisterService.register({email,password,name} as Customer).subscribe();
  }

}
