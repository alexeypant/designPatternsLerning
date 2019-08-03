(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EGumballMachineStates;
    (function (EGumballMachineStates) {
        EGumballMachineStates[EGumballMachineStates["soldOut"] = 0] = "soldOut";
        EGumballMachineStates[EGumballMachineStates["noQuarter"] = 1] = "noQuarter";
        EGumballMachineStates[EGumballMachineStates["hasQuarter"] = 2] = "hasQuarter";
        EGumballMachineStates[EGumballMachineStates["sold"] = 3] = "sold";
    })(EGumballMachineStates = exports.EGumballMachineStates || (exports.EGumballMachineStates = {}));
});
//# sourceMappingURL=EGumballMachineStates.js.map