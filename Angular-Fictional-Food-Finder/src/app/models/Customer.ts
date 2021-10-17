import { Truck } from "./Truck";


export class Customer{
    
    constructor(public email:string, public password:string, public name:string, public favorites:Truck[]){
            this.email = email;
            this.password = password;
            this.name = name;
            this.favorites = favorites;
        
        
    }
}