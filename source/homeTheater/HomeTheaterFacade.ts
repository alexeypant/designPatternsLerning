import {IAmplifier} from "./devices/Amplifier";
import {ITuner} from "./devices/Tuner";
import {IDvdPlayer} from "./devices/DvdPlayer";
import {ICdPlayer} from "./devices/CdPlayer";
import {IProjector} from "./devices/Projector";
import {ITheaterLights} from "./devices/TheaterLights";
import {IScreen} from "./devices/Screen";
import {IPopcornPopper} from "./devices/PopcornPopper";

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

export class HomeTheaterFacade implements IHomeTheaterFacade {
    constructor(
        private amplifier: IAmplifier,
        private tuner: ITuner,
        private dvdPlayer: IDvdPlayer,
        private cdPlayer: ICdPlayer,
        private projector: IProjector,
        private lights: ITheaterLights,
        private screen: IScreen,
        private popper: IPopcornPopper,
    ){

    }

    watchMovie():void {
        console.log('Get ready to watch movie');
        this.popper.on();
        this.popper.pop();
        this.lights.dim();
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amplifier.on();
        this.amplifier.setDvd(this.dvdPlayer);
        this.amplifier.setSurroundSound();
        this.amplifier.setVolume();
        this.dvdPlayer.on();
        this.dvdPlayer.play();
    }

    endMovie():void {
        console.log('Shutting movie theater down');
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amplifier.off();
        this.dvdPlayer.stop();
        this.dvdPlayer.eject();
        this.dvdPlayer.off();

    }

    listenToCd(): void {

    }

    endCd():void {

    }

    listenToDvd():void{

    }

    endDvd():void{

    }

    listenToRadio():void{

    }

    endRadio():void{

    }
}

