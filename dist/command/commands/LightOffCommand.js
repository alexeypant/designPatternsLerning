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
    var LightOffCommand = (function () {
        function LightOffCommand(lights) {
            this.lights = lights;
        }
        LightOffCommand.prototype.execute = function () {
            this.lights.off();
        };
        LightOffCommand.prototype.undo = function () {
            this.lights.on();
        };
        return LightOffCommand;
    }());
    exports.LightOffCommand = LightOffCommand;
});
//# sourceMappingURL=LightOffCommand.js.map