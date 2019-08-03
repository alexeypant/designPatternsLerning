import { ICommand } from "./ICommand";
import { IStereo } from "../devices/Stereo";
export declare class StereoOffCommand implements ICommand {
    private stereo;
    constructor(stereo: IStereo);
    execute(): void;
    undo(): void;
}
