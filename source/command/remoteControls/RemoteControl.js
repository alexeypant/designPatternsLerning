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
    var RemoteControl = (function () {
        function RemoteControl() {
            this.onCommands = [];
            this.offCommands = [];
        }
        RemoteControl.prototype.setCommand = function (slot, onCommand, offCommand) {
            this.onCommands[slot] = onCommand;
            this.offCommands[slot] = offCommand;
        };
        RemoteControl.prototype.onButtonWasPushed = function (slot) {
            this.onCommands[slot].execute();
            this.undoButton = this.onCommands[slot];
        };
        RemoteControl.prototype.offButtonWasPushed = function (slot) {
            this.offCommands[slot].execute();
            this.undoButton = this.offCommands[slot];
        };
        RemoteControl.prototype.undoButtonWasPushed = function () {
            this.undoButton.undo();
        };
        RemoteControl.prototype.toString = function () {
            return "-------Remotecontrol-----------";
        };
        return RemoteControl;
    }());
    exports.RemoteControl = RemoteControl;
});
//# sourceMappingURL=RemoteControl.js.map