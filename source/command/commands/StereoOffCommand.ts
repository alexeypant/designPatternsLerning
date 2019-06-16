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

    public undo():void{
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume();
    }
}