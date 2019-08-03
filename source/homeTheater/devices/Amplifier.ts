import {ITuner} from "./Tuner";
import {IDvdPlayer} from "./DvdPlayer";
import {ICdPlayer} from "./CdPlayer";

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

export class Amplifier implements IAmplifier {
    constructor(private tuner: ITuner, private dvdPlayer: IDvdPlayer, private cdPlayer: ICdPlayer){

    }

    on(): void {
        console.log('turning amplifier on');
    }

    off(): void {
        console.log('turning amplifier off');
    }

    setCd(cdPlayer: ICdPlayer): void {
        console.log('setting CD player');
        this.cdPlayer = cdPlayer;
    }

    setDvd(dvdPlayer: IDvdPlayer): void {
        console.log('setting DVD player');
        this.dvdPlayer = dvdPlayer;
    }

    setStereoSound():void {
        console.log('setting stereo sound');
    }

    setSurroundSound():void {
        console.log('setting surround sound');
    }

    setTuner(tuner: ITuner):void {
        this.tuner = tuner;
    }

    setVolume(): void {
        console.log('setting volume');
    }



}
