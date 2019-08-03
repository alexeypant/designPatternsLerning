import { ICommand } from "./ICommand";
import { IGarageDoor } from "../devices/GarageDoor";
export declare class GarageDoorOpenCommand implements ICommand {
    private garageDoor;
    constructor(garageDoor: IGarageDoor);
    execute(): void;
    undo(): void;
}
