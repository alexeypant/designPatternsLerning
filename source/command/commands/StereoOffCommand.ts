import {ICommand} from "./ICommand";
import {IStereo} from "../devices/Stereo";

export class StereoOffCommand implements ICommand {
    private stereo: IStereo;

    constructor (stereo: IStereo) {
        this.stereo = stereo;
    }

    public execute():void {
        this.stereo.off();
    }
}