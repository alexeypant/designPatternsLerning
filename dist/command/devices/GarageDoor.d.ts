export interface IGarageDoor {
    up: () => void;
    down: () => void;
    stop: () => void;
    lightOn: () => void;
    lightOff: () => void;
}
export declare class GarageDoor implements IGarageDoor {
    constructor();
    up(): void;
    down(): void;
    stop(): void;
    lightOn(): void;
    lightOff(): void;
}
