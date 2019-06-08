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
    var SimpleRemoteControl = (function () {
        function SimpleRemoteControl() {
        }
        SimpleRemoteControl.prototype.setCommand = function (command) {
            this.slot = command;
        };
        SimpleRemoteControl.prototype.buttonWasPressed = function () {
            this.slot.execute();
        };
        return SimpleRemoteControl;
    }());
    exports.SimpleRemoteControl = SimpleRemoteControl;
});
//# sourceMappingURL=SimpleRemoteControl.js.map