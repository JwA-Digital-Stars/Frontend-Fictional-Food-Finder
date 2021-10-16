import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegisterService {

  constructor(private httpClient:HttpClient) { }

  register(customer : Customer){
    //return this.httpClient.post<Customer>(environment.register);
  }
}
