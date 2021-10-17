import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TruckOwner } from '../models/TruckOwner';
import { Truck } from '../models/Truck';
import { environment } from 'src/environments/environment';
import { OwnerLogin } from '../models/OwnerLogin';
import { CustomerLogin } from '../models/CustomerLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  verifyLoginOwner(owner: OwnerLogin){
    
    
    return this.http.post(environment.ownerlogin,owner);
  }

  verifyLoginCustomer(customer: CustomerLogin){
    
    return this.http.post(environment.customerlogin, customer);
  }

}
