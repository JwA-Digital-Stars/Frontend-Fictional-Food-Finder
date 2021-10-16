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

  verifyLoginOwner(owner:TruckOwner){
    
    return this.http.post<TruckOwner>(this.ownerloginUrl, owner, this.httpOptions);
  }

  verifyLoginCustomer(customer:Customer){
    
    return this.http.post<Customer>(this.customerloginUrl, customer, this.httpOptions);
  }

}
