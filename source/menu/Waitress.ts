import {IPancakeHouseMenu} from "./menus/PancakeHouseMenu";
import {IDinerMenu} from "./menus/DinerMenu";
import {IIterator} from "./iterators/Iterator";
import {IMenuItem} from "./menus/MenuItem";

export interface IWaitress {
    printMenu: () => void;
    printVegetarianMenu: () => void;
    isItemVegetarian: (name: string) => boolean;
    printBreakfastMenu?: () => void;
    printLunchMenu?: () => void;

}

export class Waitress implements IWaitress {
    constructor(private pancakeHouseMenu: IPancakeHouseMenu, private dinerMenu: IDinerMenu){

    }

    printMenu(){
        const pancakeIterator: IIterator = this.pancakeHouseMenu.createIterator();
        console.log('Pancake House Menu');
        this.printMenuItems(pancakeIterator);
        const dinerIterator: IIterator = this.dinerMenu.createIterator();
        console.log('Diner Menu');
        this.printMenuItems(dinerIterator);

    }

    printVegetarianMenu(): void{
        const pancakeIterator: IIterator = this.pancakeHouseMenu.createIterator();
        const dinerIterator: IIterator = this.dinerMenu.createIterator();
        console.log('Vegetarian Menu');
        while(pancakeIterator.hasNext()){
            const menuItem: IMenuItem = pancakeIterator.next();
            if (menuItem.checkVegetarian()) {
                this.printItem(menuItem);
            }
        }
        while(dinerIterator.hasNext()){
            const menuItem: IMenuItem = dinerIterator.next();
            if (menuItem.checkVegetarian()) {
                this.printItem(menuItem);
            }
        }

    }

    private printMenuItems(iterator: IIterator):void{
        while(iterator.hasNext()){
            const menuItem: IMenuItem = iterator.next();
            this.printItem(menuItem);
        }
    }

    private printItem(item: IMenuItem): void {
        console.log(item.getName());
        console.log(item.getDescription());
        console.log(item.getPrice());
    }

    isItemVegetarian(name: string): boolean {
        const pancakeIterator: IIterator = this.pancakeHouseMenu.createIterator();
        let searchResult = null;
        while(pancakeIterator.hasNext()){
            const nextItem: IMenuItem = pancakeIterator.next();
            if (nextItem.getName() === name){
                searchResult = nextItem;
                break;
            }
        }
        const dinnerIterator: IIterator = this.dinerMenu.createIterator();
        while(!searchResult && dinnerIterator.hasNext()){
            const nextItem: IMenuItem = dinnerIterator.next();
            if (nextItem.getName() === name) {
                searchResult = nextItem;
                break;
            }
        }
        return (searchResult as IMenuItem).checkVegetarian();
    }
}
