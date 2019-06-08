import {ICommand} from "../commands/ICommand";

export class SimpleRemoteControl {
    slot: ICommand;

    constructor(){

    }

    setCommand(command: ICommand) {
        this.slot = command;
    }

    buttonWasPressed():void {
        this.slot.execute();
    }
}