import { Item } from "./Item";
import { TruckOwner } from "./TruckOwner";

export class Truck{

    constructor(public name:string, public hours:string, public owner:TruckOwner){
            this.name = name;
            this.hours = hours;
            this.owner = owner;
    }


}