import {IMenuItem, MenuItem} from "./MenuItem";
import {PancakeHouseMenuIterator} from "../iterators/PancakeHouseMenuIterator";
import {IIterator} from "../iterators/Iterator";

export interface IPancakeHouseMenu {
    addItem: (name: string, description: string, isVegetarian: boolean, price: number) => void;
    createIterator: () => IIterator;
}

export class PancakeHouseMenu {
    menuItems: IMenuItem[] = [];
    constructor () {
        this.addItem('bliny', 'russian pancakes', true, 2);
        this.addItem('hojuelas', 'mexican pancakes', false, 3);
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number):void {
      const menuItem = new MenuItem(name, description, isVegetarian, price);
      this.menuItems = [...this.menuItems, menuItem];
    }

    createIterator(){
        return new PancakeHouseMenuIterator(this.menuItems);
    }
}
