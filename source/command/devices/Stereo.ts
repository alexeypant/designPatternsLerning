export interface IStereo {
    on: () => void;
    off: () => void;
    setCD: () => void;
    setDVD: () => void;
    setRadio: () => void;
    setVolume: () => void;
}

export class Stereo implements IStereo {
    constructor () {

    }

    on():void {
        console.log('switching stereo on');
    }

    off():void {
        console.log('switching stereo off');
    }

    setCD():void {
        console.log('set CD');
    }

    setDVD():void{
        console.log('set DVD');
    }

    setRadio():void{
        console.log('set Radio');
    }

    setVolume():void {
        console.log('set volume');
    }



}