import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Truck } from '../models/Truck';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor( private http: HttpClient,) { }

  private allTrucksUrl = 'http://localhost:8000/all';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllTrucks(): Observable<Truck[]>{
    return this.http.get<Truck[]>(this.allTrucksUrl);
  }
}
