import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegisterService {

  private customerRegisterUrl ='http://localhost:8080/create'
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  
  constructor(private http:HttpClient) { }

  register(customer : Customer){
    return this.http.post<Customer>(this.customerRegisterUrl, customer, this.httpOptions);
  }
}
