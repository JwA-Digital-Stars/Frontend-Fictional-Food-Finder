import { Truck } from "./Truck";


export class TruckOwner {

    constructor(public email:string, public password:string, public name:string){
        this.email = email;
        this.password = password;
        this.name = name;
    }
}