export interface ITheaterLights {
    on: () => void;
    off: () => void;
    dim: () => void;
}

export class TheaterLights implements ITheaterLights {
    on():void {
        console.log('turning lights on');
    }

    off():void {
        console.log('turning lights off');
    }

    dim():void {
        console.log('dimming lights');
    }
}
