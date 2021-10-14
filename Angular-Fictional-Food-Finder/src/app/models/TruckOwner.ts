import { Truck } from "./Truck";


export class TruckOwner {

    constructor(public id:number, public email:string, public password:string, public name:string, 
        public type:string, public truck:Truck){
        
    }
}