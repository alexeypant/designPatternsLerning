import {EGumballMachineStates} from "./EGumballMachineStates";
import {IGumballMachineActions} from "./IGumballMachineActions";

export class GumballMachine implements IGumballMachineActions {
    public machineState: EGumballMachineStates = EGumballMachineStates.soldOut;

    constructor(public gumballCount: number = 0){
      if (gumballCount > 0){
          this.machineState = EGumballMachineStates.noQuarter;
      }
    }

    insertQuarter():void{
      if(this.machineState === EGumballMachineStates.hasQuarter){
        console.log('you can not insert another quarter');
      } else if (this.machineState === EGumballMachineStates.noQuarter) {
          this.machineState = EGumballMachineStates.hasQuarter;
          console.log('you inserted a quarter');
      } else if (this.machineState === EGumballMachineStates.soldOut) {
          console.log('you can not insert another quarter, the machine is sold out');
      } else if (this.machineState === EGumballMachineStates.sold) {
          console.log('please wait, we are already giving you a gumball');
      }
    }
    ejectQuarter():void{
        if(this.machineState === EGumballMachineStates.hasQuarter){
            console.log('quarter returned');
            this.machineState = EGumballMachineStates.noQuarter;
        } else if (this.machineState === EGumballMachineStates.noQuarter) {
            this.machineState = EGumballMachineStates.hasQuarter;
            console.log('you hav not inserted a quarter');
        } else if (this.machineState === EGumballMachineStates.soldOut) {
            console.log('you can not eject, you have not inserted a quarter yet');
        } else if (this.machineState === EGumballMachineStates.sold) {
            console.log('sorry, you have already turned the crank');
        }
    }
    turnsCrank():void{
        if(this.machineState === EGumballMachineStates.hasQuarter){
            console.log('you turned');
            this.machineState = EGumballMachineStates.sold;
            this.dispense();
        } else if (this.machineState === EGumballMachineStates.noQuarter) {
            console.log('you turned, but there is no quarter');
        } else if (this.machineState === EGumballMachineStates.soldOut) {
            console.log('you turned but there is no gumballs');
        } else if (this.machineState === EGumballMachineStates.sold) {
            console.log('turning twice does not giving you another gumball');
        }
    }
    dispense():void{
        if(this.machineState === EGumballMachineStates.hasQuarter){
            console.log('no gumball dispensed');
        } else if (this.machineState === EGumballMachineStates.noQuarter) {
            console.log('you should pay first');
        } else if (this.machineState === EGumballMachineStates.soldOut) {
            console.log('no gumball dispensed');
        } else if (this.machineState === EGumballMachineStates.sold) {
            console.log('a gumball comes rolling out the slot');
            this.gumballCount -= 1;
            if (this.gumballCount === 0) {
                console.log('Oops, out of gumballs');
                this.machineState = EGumballMachineStates.soldOut;
            } else {
                this.machineState = EGumballMachineStates.noQuarter;
            }
        }
    }

}
