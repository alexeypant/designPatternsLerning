export interface ILights {
    on: () => void;
    off: () => void;
}

export class Lights implements ILights {
    constructor () {

    }

    public on():void {
        console.log('switching lights on');
    }

    public off():void {
        console.log('switching lights off');
    }
}