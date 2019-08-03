import { ICommand } from "../commands/ICommand";
export interface IRemoteControl {
    setCommand: (slot: number, onCommand: ICommand, offCommand: ICommand) => void;
    onButtonWasPushed: (slot: number) => void;
    offButtonWasPushed: (slot: number) => void;
    undoButtonWasPushed: () => void;
    toString: () => string;
}
export declare class RemoteControl implements IRemoteControl {
    onCommands: ICommand[];
    offCommands: ICommand[];
    undoButton: ICommand;
    constructor();
    setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void;
    onButtonWasPushed(slot: number): void;
    offButtonWasPushed(slot: number): void;
    undoButtonWasPushed(): void;
    toString(): string;
}
