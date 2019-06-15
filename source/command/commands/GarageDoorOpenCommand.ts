import {ICommand} from "./ICommand";
import {IGarageDoor} from "../devices/GarageDoor";


export class GarageDoorOpenCommand implements ICommand {
    private garageDoor: IGarageDoor;

    constructor (garageDoor: IGarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute():void {
        this.garageDoor.up();
    }
}