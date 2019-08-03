export interface IPopcornPopper {
    on: () => void;
    off: () => void;
    pop: () => void;
}

export class PopcornPopper implements IPopcornPopper {
    on():void {
        console.log('turning popcorn popper on');
    }

    off():void {
        console.log('turning popcorn popper off');
    }

    pop():void {
        console.log('popping some popcorn');
    }
}
