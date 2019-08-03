import { IIterator } from "./Iterator";
import { IDinerMenuItems } from "../menus/DinerMenu";
import { IMenuItem } from "../menus/MenuItem";
export declare class DinerMenuIterator implements IIterator {
    private menuItems;
    private position;
    constructor(menuItems: IDinerMenuItems);
    hasNext(): boolean;
    next(): IMenuItem;
}
