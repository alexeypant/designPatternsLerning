import {CaffeineBeverage} from "../CaffeineBeverage";

export class CoffeeWithHook extends CaffeineBeverage {
    constructor (private isCondimentNeeded: boolean = true) {
        super();
    }
    brew():void {
        console.log('dripping coffee through filter');
    }
    addCondiments():void {
        console.log('adding sugar and milk');
    }
    customerWantsCondiment(): boolean {
        return this.isCondimentNeeded;
    }
}
