import {IAmplifier} from "./Amplifier";

export interface IDvdPlayer {
    on: () => void;
    off: () => void;
    eject: () => void;
    pause: () => void;
    play: () => void;
    setSurroundAudio: () => void;
    setTwoChannelAudio: () => void;
    stop: () => void;
}

export class DvdPlayer implements IDvdPlayer {

    on(): void {
        console.log('turning DVD on');
    }

    off(): void {
        console.log('turning DVD off');
    }

    eject(): void {
        console.log('ejecting DVD');
    }

    pause(): void {
        console.log('pausing DVD');
    }

    play(): void {
        console.log('playing DVD');
    }

    setSurroundAudio(): void {
        console.log('setting surround audio');
    }

    setTwoChannelAudio(): void {
        console.log('setting two channel audio');
    }

    stop(): void {
        console.log('stopping DVD');
    }

}
