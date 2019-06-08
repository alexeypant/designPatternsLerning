import {Beverage} from "../../dist/coffeeAddsOns/Beverage";

export abstract class CondimentDecorator extends Beverage {

    abstract getDescription(): string;

}
