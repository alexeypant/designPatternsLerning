import {CaffeineBeverage} from "../CaffeineBeverage";


export class Tea extends CaffeineBeverage{
    brew():void {
        console.log('steeping tea bag');
    }
    addCondiments():void {
        console.log('adding lemon');
    }
}
