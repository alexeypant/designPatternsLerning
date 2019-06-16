import {ICommand} from "./ICommand";
import {ILights} from "../devices/Lights";

export class LightOffCommand implements ICommand {
    private lights: ILights;

    constructor (lights: ILights) {
        this.lights = lights;
    }

    public execute():void {
        this.lights.off();
    }

    public undo():void {
        this.lights.on();
    }
}