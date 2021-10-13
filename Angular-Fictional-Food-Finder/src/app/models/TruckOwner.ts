import { Truck } from "./Truck";
import { User } from "./User";

export class TruckOwner extends User{

    constructor(public id:number, public email:string, public password:string, public name:string, 
        public type:string, public truck:Truck){
        super(id,email,password,name,type);
    }
}