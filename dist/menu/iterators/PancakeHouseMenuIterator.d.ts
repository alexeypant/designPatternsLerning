import { IIterator } from "./Iterator";
import { IMenuItem } from "../menus/MenuItem";
export declare class PancakeHouseMenuIterator implements IIterator {
    private menuItems;
    private position;
    constructor(menuItems: IMenuItem[]);
    hasNext(): boolean;
    next(): IMenuItem;
}
