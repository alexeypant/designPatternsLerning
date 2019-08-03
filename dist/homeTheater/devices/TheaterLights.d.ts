export interface ITheaterLights {
    on: () => void;
    off: () => void;
    dim: () => void;
}
export declare class TheaterLights implements ITheaterLights {
    on(): void;
    off(): void;
    dim(): void;
}
