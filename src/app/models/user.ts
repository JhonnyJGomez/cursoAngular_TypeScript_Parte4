import { Address } from './address';

export class User{
    id:number
    name:string
    username:string
    email:string
    address: Address

    constructor(){
        this.address = new Address();
    }
}