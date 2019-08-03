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
export declare class DvdPlayer implements IDvdPlayer {
    on(): void;
    off(): void;
    eject(): void;
    pause(): void;
    play(): void;
    setSurroundAudio(): void;
    setTwoChannelAudio(): void;
    stop(): void;
}
