import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { TruckOwner } from '../models/TruckOwner';
import { Truck } from '../models/Truck';
import { TruckPost } from '../models/TruckPost';

@Injectable({
  providedIn: 'root'
})
export class OwnerRegisterService {

  constructor(private http:HttpClient) { }

  register(owner : TruckOwner){
    return this.http.post<TruckOwner>(environment.ownerRegister, owner);
  }

  registerTruck(name:string , email:string){
    return this.http.post<TruckPost>(environment.createTruck, {name,email});
  }
}
