import { IMenuItem } from "./MenuItem";
import { PancakeHouseMenuIterator } from "../iterators/PancakeHouseMenuIterator";
import { IIterator } from "../iterators/Iterator";
export interface IPancakeHouseMenu {
    addItem: (name: string, description: string, isVegetarian: boolean, price: number) => void;
    createIterator: () => IIterator;
}
export declare class PancakeHouseMenu {
    menuItems: IMenuItem[];
    constructor();
    addItem(name: string, description: string, isVegetarian: boolean, price: number): void;
    createIterator(): PancakeHouseMenuIterator;
}
