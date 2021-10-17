import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TruckOwner } from '../models/TruckOwner';
import { Truck } from '../models/Truck';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private customerloginUrl ='http://localhost:8080/customer/login'
  private ownerloginUrl ='http://localhost:8080/owner/login'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  verifyLoginOwner(email:string , password:string){
    
    return this.http.post(this.ownerloginUrl, {email,password}, this.httpOptions);
  }

  verifyLoginCustomer(email:string , password:string){
    
    return this.http.post(this.customerloginUrl, {email,password}, this.httpOptions);
  }

}
