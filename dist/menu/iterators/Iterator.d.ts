import { IMenuItem } from "../menus/MenuItem";
export interface IIterator {
    hasNext: () => boolean;
    next: () => IMenuItem;
}
