import {ICommand} from "./ICommand";
import {ILights} from "../devices/Lights";

export class LightOnCommand implements ICommand {
    private lights: ILights;

    constructor (lights: ILights) {
        this.lights = lights;
    }

    public execute():void {
        this.lights.on();
    }

    public undo(): void {
        this.lights.off();
    }
}