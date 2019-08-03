import {IDvdPlayer} from "./DvdPlayer";

export interface IProjector {
    on: () => void;
    off: () => void;
    tvMode: () => void;
    wideScreenMode: () => void;
}

export class Projector implements IProjector {
    constructor(private dvdPlayer: IDvdPlayer){

    }

    on(): void {
        console.log('turning projector on');
    }

    off(): void {
        console.log('turning projector off');
    }

    tvMode(): void {
        console.log('turning projector to tvMode');
    }

    wideScreenMode(): void {
        console.log('turning projector to wide screen mode');
    }
}
