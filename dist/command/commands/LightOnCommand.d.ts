import { ICommand } from "./ICommand";
import { ILights } from "../devices/Lights";
export declare class LightOnCommand implements ICommand {
    private lights;
    constructor(lights: ILights);
    execute(): void;
}
