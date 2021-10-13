export class User{


    constructor(public id:number, public email:string, public password:string, public name:string, public type:string){
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.type = type;
    }

    
}