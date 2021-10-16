import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Truck } from '../models/Truck';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor( private http: HttpClient,) { }

  private allTrucksUrl = 'http://localhost:8080/truck/all';

  //httpOptions = {
   // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //};

  getAllTrucks(): Observable<Truck[]>{
    return this.http.get(environment.getAllTrucks) as Observable<Truck[]>;
  }
}
