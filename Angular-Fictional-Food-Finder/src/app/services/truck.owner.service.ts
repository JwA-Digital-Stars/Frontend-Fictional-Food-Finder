import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable, of, BehaviorSubject } from 'rxjs';
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
export class TruckOwnerService {

  private ownerSubject: BehaviorSubject<TruckOwner>;
  public owner: Observable<TruckOwner>;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.ownerSubject = new BehaviorSubject<TruckOwner>(JSON.parse(localStorage.getItem('owner')!));
    this.owner = this.ownerSubject.asObservable();

  }

  public get ownerValue(): TruckOwner {
    return this.ownerSubject.value;
  }

  verifyLoginOwner(owner: OwnerLogin) {
    let verification = this.http.post(environment.ownerlogin, owner)
      .pipe(map(owner => {
        // store owner details and jwt token in local storage to keep owner logged in between page refreshes
        localStorage.setItem('owner', JSON.stringify(owner));
        this.ownerSubject.next(owner);
        return owner;
      }));;

    return verification
  }

  verifyLoginCustomer(customer: CustomerLogin) {

    return this.http.post(environment.customerlogin, customer);
  }

}
