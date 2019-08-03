import { IDvdPlayer } from "./DvdPlayer";
export interface IProjector {
    on: () => void;
    off: () => void;
    tvMode: () => void;
    wideScreenMode: () => void;
}
export declare class Projector implements IProjector {
    private dvdPlayer;
    constructor(dvdPlayer: IDvdPlayer);
    on(): void;
    off(): void;
    tvMode(): void;
    wideScreenMode(): void;
}
