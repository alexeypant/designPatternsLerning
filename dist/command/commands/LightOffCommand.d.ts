import { ICommand } from "./ICommand";
import { ILights } from "../devices/Lights";
export declare class LightOffCommand implements ICommand {
    private lights;
    constructor(lights: ILights);
    execute(): void;
    undo(): void;
}
