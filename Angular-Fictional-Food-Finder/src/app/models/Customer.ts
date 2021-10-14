import { Truck } from "./Truck";


export class Customer{
    
    constructor(public email:string, public password:string, public name:string, public favorites:Truck[]){
            
        
        this.favorites = favorites;
    }
}