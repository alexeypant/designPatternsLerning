import { CondimentDecorator } from "../../dist/coffeeAddsOns/CondimentDecorator";
import { Beverage } from "../../dist/coffeeAddsOns/Beverage";
export declare class Whip extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage);
    getDescription(): string;
    getCost(): number;
}
