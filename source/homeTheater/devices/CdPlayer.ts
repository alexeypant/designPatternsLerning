import {IAmplifier} from "./Amplifier";

export interface ICdPlayer {
    on: () => void;
    off: () => void;
    eject: () => void;
    pause: () => void;
    play: () => void;
    stop: () => void;
}

export class CdPlayer implements ICdPlayer {

    on(): void {
        console.log('turning CD player on');
    }

    off(): void {
        console.log('turning CD player off');
    }

    eject(): void {
        console.log('ejecting CD');
    }

    pause(): void {
        console.log('pausing CD player');
    }

    play(): void {
        console.log('playing CD');
    }

    stop(): void {
        console.log('stopping CD');
    }

}
