import {Beverage} from "../../dist/coffeeAddsOns/Beverage";

export class Espresso extends Beverage {
    constructor(){
        super();
        this.description = 'Espresso';
    }

    getCost(): number {
        return 1.99;
    }
}