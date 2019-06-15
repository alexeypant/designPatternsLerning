export interface IGarageDoor {
    up: () => void;
    down: () => void;
    stop: () => void;
    lightOn: () => void;
    lightOff: () => void;
}

export class GarageDoor implements IGarageDoor {
    constructor () {

    }

    up():void {
        console.log('door up');
    }

    down():void {
        console.log('door down');
    }

    stop():void {
        console.log('door stop');
    }

    lightOn():void {
        console.log('door light on');
    }

    lightOff():void {
        console.log('door light off');
    }

}