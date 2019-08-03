import { ICommand } from "./ICommand";
import { IStereo } from "../devices/Stereo";
export declare class StereoOnCommand implements ICommand {
    private stereo;
    constructor(stereo: IStereo);
    execute(): void;
    undo(): void;
}
