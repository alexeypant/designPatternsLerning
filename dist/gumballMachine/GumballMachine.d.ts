import { EGumballMachineStates } from "./EGumballMachineStates";
import { IGumballMachineActions } from "./IGumballMachineActions";
export declare class GumballMachine implements IGumballMachineActions {
    gumballCount: number;
    machineState: EGumballMachineStates;
    constructor(gumballCount?: number);
    insertQuarter(): void;
    ejectQuarter(): void;
    turnsCrank(): void;
    dispense(): void;
}
