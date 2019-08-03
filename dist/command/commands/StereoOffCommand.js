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
    var StereoOffCommand = (function () {
        function StereoOffCommand(stereo) {
            this.stereo = stereo;
        }
        StereoOffCommand.prototype.execute = function () {
            this.stereo.off();
        };
        StereoOffCommand.prototype.undo = function () {
            this.stereo.on();
            this.stereo.setCD();
            this.stereo.setVolume();
        };
        return StereoOffCommand;
    }());
    exports.StereoOffCommand = StereoOffCommand;
});
//# sourceMappingURL=StereoOffCommand.js.map