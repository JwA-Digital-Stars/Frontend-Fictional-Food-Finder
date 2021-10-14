import { Item } from "./Item";
import { TruckOwner } from "./TruckOwner";

export class Truck{

    constructor(public name:string, public menu:Item[], public hours:string, public owner:TruckOwner){

    }


}