(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./EGumballMachineStates"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EGumballMachineStates_1 = require("./EGumballMachineStates");
    var GumballMachine = (function () {
        function GumballMachine(gumballCount) {
            if (gumballCount === void 0) { gumballCount = 0; }
            this.gumballCount = gumballCount;
            this.machineState = EGumballMachineStates_1.EGumballMachineStates.soldOut;
            if (gumballCount > 0) {
                this.machineState = EGumballMachineStates_1.EGumballMachineStates.noQuarter;
            }
        }
        GumballMachine.prototype.insertQuarter = function () {
            if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.hasQuarter) {
                console.log('you can not insert another quarter');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.noQuarter) {
                this.machineState = EGumballMachineStates_1.EGumballMachineStates.hasQuarter;
                console.log('you inserted a quarter');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.soldOut) {
                console.log('you can not insert another quarter, the machine is sold out');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.sold) {
                console.log('please wait, we are already giving you a gumball');
            }
        };
        GumballMachine.prototype.ejectQuarter = function () {
            if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.hasQuarter) {
                console.log('quarter returned');
                this.machineState = EGumballMachineStates_1.EGumballMachineStates.noQuarter;
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.noQuarter) {
                this.machineState = EGumballMachineStates_1.EGumballMachineStates.hasQuarter;
                console.log('you hav not inserted a quarter');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.soldOut) {
                console.log('you can not eject, you have not inserted a quarter yet');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.sold) {
                console.log('sorry, you have already turned the crank');
            }
        };
        GumballMachine.prototype.turnsCrank = function () {
            if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.hasQuarter) {
                console.log('you turned');
                this.machineState = EGumballMachineStates_1.EGumballMachineStates.sold;
                this.dispense();
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.noQuarter) {
                console.log('you turned, but there is no quarter');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.soldOut) {
                console.log('you turned but there is no gumballs');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.sold) {
                console.log('turning twice does not giving you another gumball');
            }
        };
        GumballMachine.prototype.dispense = function () {
            if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.hasQuarter) {
                console.log('no gumball dispensed');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.noQuarter) {
                console.log('you should pay first');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.soldOut) {
                console.log('no gumball dispensed');
            }
            else if (this.machineState === EGumballMachineStates_1.EGumballMachineStates.sold) {
                console.log('a gumball comes rolling out the slot');
                this.gumballCount -= 1;
                if (this.gumballCount === 0) {
                    console.log('Oops, out of gumballs');
                    this.machineState = EGumballMachineStates_1.EGumballMachineStates.soldOut;
                }
                else {
                    this.machineState = EGumballMachineStates_1.EGumballMachineStates.noQuarter;
                }
            }
        };
        return GumballMachine;
    }());
    exports.GumballMachine = GumballMachine;
});
//# sourceMappingURL=GumballMachine.js.map