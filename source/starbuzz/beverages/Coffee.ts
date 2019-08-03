import {CaffeineBeverage} from "../CaffeineBeverage";

export class Coffee extends CaffeineBeverage {
    brew():void {
        console.log('dripping coffee through filter');
    }
    addCondiments():void {
        console.log('adding sugar and milk');
    }
}
