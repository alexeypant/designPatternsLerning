import {ICommand} from "../commands/ICommand";

export interface IRemoteControl {
    setCommand: (slot: number, onCommand: ICommand, offCommand: ICommand) => void;
    onButtonWasPushed: (slot: number) => void;
    offButtonWasPushed: (slot: number) => void;
    toString: () => string;
}

export class RemoteControl implements IRemoteControl {
    onCommands: ICommand[] = [];
    offCommands: ICommand[] = [];

    constructor(){
    }

    setCommand(slot: number, onCommand: ICommand, offCommand: ICommand): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
    }

    toString(): string {
        return `-------Remotecontrol-----------`;
    }
}