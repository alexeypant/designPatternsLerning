import {CondimentDecorator} from "../../dist/coffeeAddsOns/CondimentDecorator";
import {Beverage} from "../../dist/coffeeAddsOns/Beverage";

export class Whip extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    getCost(): number {
        return (0.30 + this.beverage.getCost());
    }


}