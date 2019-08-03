import { IMenuItem } from "./MenuItem";
import { DinerMenuIterator } from "../iterators/DinerMenuIterator";
import { IIterator } from "../iterators/Iterator";
export interface IDinerMenuItems {
    [key: number]: IMenuItem;
}
export interface IDinerMenu {
    addItem: (name: string, description: string, isVegetarian: boolean, price: number) => void;
    createIterator: () => IIterator;
}
export declare class DinerMenu {
    maxItemsCount: number;
    numberOfItems: number;
    menuItems: IDinerMenuItems;
    constructor();
    addItem(name: string, description: string, isVegetarian: boolean, price: number): void;
    createIterator(): DinerMenuIterator;
}
