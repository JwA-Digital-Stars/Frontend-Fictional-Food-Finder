import { Truck } from "./Truck";
import { User } from "./User";

export class Customer extends User{
    
    constructor(public id:number, public email:string, 
        public password:string, public name:string, public type:string, public favorites:Truck[]){
            
        super(id,email,password,name,type);
        this.favorites = favorites;
    }
}