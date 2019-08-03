export interface IStereo {
    on: () => void;
    off: () => void;
    setCD: () => void;
    setDVD: () => void;
    setRadio: () => void;
    setVolume: () => void;
}
export declare class Stereo implements IStereo {
    constructor();
    on(): void;
    off(): void;
    setCD(): void;
    setDVD(): void;
    setRadio(): void;
    setVolume(): void;
}
