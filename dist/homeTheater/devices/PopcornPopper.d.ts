export interface IPopcornPopper {
    on: () => void;
    off: () => void;
    pop: () => void;
}
export declare class PopcornPopper implements IPopcornPopper {
    on(): void;
    off(): void;
    pop(): void;
}
