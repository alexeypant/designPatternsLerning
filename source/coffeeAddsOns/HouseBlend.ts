import {Beverage} from "../../dist/coffeeAddsOns/Beverage";

export class HouseBlend extends Beverage {
    constructor(){
        super();
        this.description = 'House Blend Coffee';
    }

    getCost(): number {
        return 0.89;
    }
}