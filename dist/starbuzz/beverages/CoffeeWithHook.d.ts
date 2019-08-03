import { CaffeineBeverage } from "../CaffeineBeverage";
export declare class CoffeeWithHook extends CaffeineBeverage {
    private isCondimentNeeded;
    constructor(isCondimentNeeded?: boolean);
    brew(): void;
    addCondiments(): void;
    customerWantsCondiment(): boolean;
}
