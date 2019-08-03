import {IMenuItem, MenuItem} from "./MenuItem";
import {DinerMenuIterator} from "../iterators/DinerMenuIterator";
import {IIterator} from "../iterators/Iterator";

export interface IDinerMenuItems {
    [key: number]: IMenuItem;
}

export interface IDinerMenu {
    addItem: (name: string, description: string, isVegetarian: boolean, price: number)=> void;
    createIterator: () => IIterator;
}

export class DinerMenu {
    maxItemsCount: number = 6;
    numberOfItems: number = 0;
    menuItems: IDinerMenuItems = {};

    constructor(){
      this.addItem('pelmeny', 'traditional russian food', false, 5);
      this.addItem('gaspacho', 'traditional spanish cold soup', true, 3);
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number){
        const menuItem = new MenuItem(name, description, isVegetarian, price);
        if (this.numberOfItems >= this.maxItemsCount) {
            console.log('Sorry, menu is full, can not add new items');
        } else {
            this.menuItems[this.numberOfItems] = menuItem;
            this.numberOfItems += 1;
        }
    }

    createIterator(){
        return new DinerMenuIterator(this.menuItems);
    }
}
