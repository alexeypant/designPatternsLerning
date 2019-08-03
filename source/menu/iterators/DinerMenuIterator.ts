import {IIterator} from "./Iterator";
import {IDinerMenuItems} from "../menus/DinerMenu";
import {IMenuItem} from "../menus/MenuItem";

export class DinerMenuIterator implements IIterator{

    private position: number = -1;

    constructor(private menuItems: IDinerMenuItems) {
    }

    hasNext():boolean{
        return this.menuItems.hasOwnProperty(this.position + 1);
    }

    next(): IMenuItem{
        this.position += 1;
        return this.menuItems[this.position];
    }
}
