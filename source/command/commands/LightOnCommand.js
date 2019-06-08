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
    var LightOnCommand = (function () {
        function LightOnCommand(lights) {
            this.lights = lights;
        }
        LightOnCommand.prototype.execute = function () {
            this.lights.on();
        };
        return LightOnCommand;
    }());
    exports.LightOnCommand = LightOnCommand;
});
//# sourceMappingURL=LightOnCommand.js.map