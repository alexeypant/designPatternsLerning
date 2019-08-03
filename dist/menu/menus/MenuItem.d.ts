export interface IMenuItem {
    getName: () => string;
    getDescription: () => string;
    checkVegetarian: () => boolean;
    getPrice: () => number;
}
export declare class MenuItem implements IMenuItem {
    private name;
    private description;
    private isVegetarian;
    private price;
    constructor(name: string, description: string, isVegetarian: boolean, price: number);
    getName(): string;
    getDescription(): string;
    checkVegetarian(): boolean;
    getPrice(): number;
}
