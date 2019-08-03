export interface ICaffeineBeverage {
    prepareRecipe: () => void;
    boilWater: () => void;
    brew: () => void;
    pourInCup: () => void;
    addCondiments: () => void;
    customerWantsCondiment: () => boolean;
}
export declare class CaffeineBeverage implements ICaffeineBeverage {
    prepareRecipe(): void;
    boilWater(): void;
    brew(): void;
    pourInCup(): void;
    addCondiments(): void;
    customerWantsCondiment(): boolean;
}
