import { ITuner } from "./Tuner";
import { IDvdPlayer } from "./DvdPlayer";
import { ICdPlayer } from "./CdPlayer";
export interface IAmplifier {
    on: () => void;
    off: () => void;
    setCd: (cdPlayer: ICdPlayer) => void;
    setDvd: (dvdPlayer: IDvdPlayer) => void;
    setStereoSound: () => void;
    setSurroundSound: () => void;
    setTuner: (tuner: ITuner) => void;
    setVolume: () => void;
}
export declare class Amplifier implements IAmplifier {
    private tuner;
    private dvdPlayer;
    private cdPlayer;
    constructor(tuner: ITuner, dvdPlayer: IDvdPlayer, cdPlayer: ICdPlayer);
    on(): void;
    off(): void;
    setCd(cdPlayer: ICdPlayer): void;
    setDvd(dvdPlayer: IDvdPlayer): void;
    setStereoSound(): void;
    setSurroundSound(): void;
    setTuner(tuner: ITuner): void;
    setVolume(): void;
}
