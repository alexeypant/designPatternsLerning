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
    var GarageDoorOpenCommand = (function () {
        function GarageDoorOpenCommand(garageDoor) {
            this.garageDoor = garageDoor;
        }
        GarageDoorOpenCommand.prototype.execute = function () {
            this.garageDoor.up();
        };
        GarageDoorOpenCommand.prototype.undo = function () {
            this.garageDoor.down();
        };
        return GarageDoorOpenCommand;
    }());
    exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
});
//# sourceMappingURL=GarageDoorOpenCommand.js.map