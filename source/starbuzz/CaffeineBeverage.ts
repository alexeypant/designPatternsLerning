export interface ICaffeineBeverage {
    prepareRecipe: () => void;
    boilWater: () => void;
    brew: () => void;
    pourInCup: () => void;
    addCondiments: () => void;
    customerWantsCondiment: () => boolean;
}

export class CaffeineBeverage implements ICaffeineBeverage {
    prepareRecipe():void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiment()) {
            this.addCondiments();
        }
    }
    boilWater():void {
        console.log('boiling water');
    }
    brew():void {
        console.log('brew beverage');
    }
    pourInCup():void {
        console.log('pouring cup');
    }
    addCondiments(): void {
        console.log('adding condiments');
    }
    customerWantsCondiment(): boolean {
        return true;
    }
}
