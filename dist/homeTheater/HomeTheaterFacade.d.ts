import { IAmplifier } from "./devices/Amplifier";
import { ITuner } from "./devices/Tuner";
import { IDvdPlayer } from "./devices/DvdPlayer";
import { ICdPlayer } from "./devices/CdPlayer";
import { IProjector } from "./devices/Projector";
import { ITheaterLights } from "./devices/TheaterLights";
import { IScreen } from "./devices/Screen";
import { IPopcornPopper } from "./devices/PopcornPopper";
export interface IHomeTheaterFacade {
    watchMovie: () => void;
    endMovie: () => void;
    listenToCd: () => void;
    endCd: () => void;
    listenToDvd: () => void;
    endDvd: () => void;
    listenToRadio: () => void;
    endRadio: () => void;
}
export declare class HomeTheaterFacade implements IHomeTheaterFacade {
    private amplifier;
    private tuner;
    private dvdPlayer;
    private cdPlayer;
    private projector;
    private lights;
    private screen;
    private popper;
    constructor(amplifier: IAmplifier, tuner: ITuner, dvdPlayer: IDvdPlayer, cdPlayer: ICdPlayer, projector: IProjector, lights: ITheaterLights, screen: IScreen, popper: IPopcornPopper);
    watchMovie(): void;
    endMovie(): void;
    listenToCd(): void;
    endCd(): void;
    listenToDvd(): void;
    endDvd(): void;
    listenToRadio(): void;
    endRadio(): void;
}
