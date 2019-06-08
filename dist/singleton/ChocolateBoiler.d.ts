export interface IChocolateBoiler {
    fill: () => void;
    drain: () => void;
    boil: () => void;
    isEmpty: () => boolean;
    isBoiled: () => boolean;
}
export declare class ChocolateBoiler implements IChocolateBoiler {
    private empty;
    private boiled;
    private static instance;
    private constructor();
    static getInstance(): IChocolateBoiler;
    fill(): void;
    drain(): void;
    boil(): void;
    isEmpty(): boolean;
    isBoiled(): boolean;
}
