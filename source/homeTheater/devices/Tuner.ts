import {IAmplifier} from "./Amplifier";

export interface ITuner {
    on: () => void;
    off: () => void;
    setAm: () => void;
    setFm: () => void;
    setFrequency: () => void;
}


export class Tuner implements ITuner {

    on ():void {
        console.log('turning tuner on');
    }

    off ():void {
        console.log('turning tuner off');
    }

    setAm ():void {
        console.log('setting AM');
    }

    setFm ():void {
        console.log('setting FM');
    }

    setFrequency ():void {
        console.log('setting frequency');
    }

}


