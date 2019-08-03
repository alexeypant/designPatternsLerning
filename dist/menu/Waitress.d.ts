import { IPancakeHouseMenu } from "./menus/PancakeHouseMenu";
import { IDinerMenu } from "./menus/DinerMenu";
export interface IWaitress {
    printMenu: () => void;
    printVegetarianMenu: () => void;
    isItemVegetarian: (name: string) => boolean;
    printBreakfastMenu?: () => void;
    printLunchMenu?: () => void;
}
export declare class Waitress implements IWaitress {
    private pancakeHouseMenu;
    private dinerMenu;
    constructor(pancakeHouseMenu: IPancakeHouseMenu, dinerMenu: IDinerMenu);
    printMenu(): void;
    printVegetarianMenu(): void;
    private printMenuItems;
    private printItem;
    isItemVegetarian(name: string): boolean;
}
