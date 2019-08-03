export interface ICdPlayer {
    on: () => void;
    off: () => void;
    eject: () => void;
    pause: () => void;
    play: () => void;
    stop: () => void;
}
export declare class CdPlayer implements ICdPlayer {
    on(): void;
    off(): void;
    eject(): void;
    pause(): void;
    play(): void;
    stop(): void;
}
