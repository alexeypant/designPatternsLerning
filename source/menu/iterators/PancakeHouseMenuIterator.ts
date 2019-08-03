import {IIterator} from "./Iterator";
import {IMenuItem} from "../menus/MenuItem";

export class PancakeHouseMenuIterator implements IIterator {

    private position: number = -1;
    constructor(private menuItems: IMenuItem[]){

    }

    hasNext():boolean{
        return (this.position + 1) < this.menuItems.length;
    }

    next():IMenuItem{
        this.position += 1;
        return this.menuItems[this.position];
    }
}
