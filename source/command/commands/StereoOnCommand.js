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
    var StereoOnCommand = (function () {
        function StereoOnCommand(stereo) {
            this.stereo = stereo;
        }
        StereoOnCommand.prototype.execute = function () {
            this.stereo.on();
            this.stereo.setCD();
            this.stereo.setVolume();
        };
        StereoOnCommand.prototype.undo = function () {
            this.stereo.off();
        };
        return StereoOnCommand;
    }());
    exports.StereoOnCommand = StereoOnCommand;
});
//# sourceMappingURL=StereoOnCommand.js.map