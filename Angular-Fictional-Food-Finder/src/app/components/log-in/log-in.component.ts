import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(email:string, password:string): void{
    if(!email){return;}
    this.loginService.verifyLogin({email,password} as Customer).subscribe();
  }
}
