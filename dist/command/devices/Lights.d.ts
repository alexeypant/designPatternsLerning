export interface ILights {
    on: () => void;
    off: () => void;
}
export declare class Lights implements ILights {
    constructor();
    on(): void;
    off(): void;
}
