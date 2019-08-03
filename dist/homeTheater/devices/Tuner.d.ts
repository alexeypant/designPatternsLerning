export interface ITuner {
    on: () => void;
    off: () => void;
    setAm: () => void;
    setFm: () => void;
    setFrequency: () => void;
}
export declare class Tuner implements ITuner {
    on(): void;
    off(): void;
    setAm(): void;
    setFm(): void;
    setFrequency(): void;
}
