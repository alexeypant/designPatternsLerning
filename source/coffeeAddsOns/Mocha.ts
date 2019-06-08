import {CondimentDecorator} from "../../dist/coffeeAddsOns/CondimentDecorator";
import {Beverage} from "../../dist/coffeeAddsOns/Beverage";

export class Mocha extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    getCost(): number {
        return (0.20 + this.beverage.getCost());
    }


}