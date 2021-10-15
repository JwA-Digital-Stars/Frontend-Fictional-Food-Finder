import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl ='http://localhost:8000/login'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  verifyLogin(customer:Customer){
    return this.http.post<Customer>(this.loginUrl, customer, this.httpOptions);
  }

}
