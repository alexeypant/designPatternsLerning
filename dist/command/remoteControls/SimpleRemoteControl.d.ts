import { ICommand } from "../commands/ICommand";
export declare class SimpleRemoteControl {
    slot: ICommand;
    constructor();
    setCommand(command: ICommand): void;
    buttonWasPressed(): void;
}
