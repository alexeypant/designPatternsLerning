export interface IGumballMachineActions {
    insertQuarter: () => void;
    turnsCrank: () => void;
    ejectQuarter: () => void;
    dispense: () => void;
}
