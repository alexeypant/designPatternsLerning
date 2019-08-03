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
    var Amplifier = (function () {
        function Amplifier(tuner, dvdPlayer, cdPlayer) {
            this.tuner = tuner;
            this.dvdPlayer = dvdPlayer;
            this.cdPlayer = cdPlayer;
        }
        Amplifier.prototype.on = function () {
            console.log('turning amplifier on');
        };
        Amplifier.prototype.off = function () {
            console.log('turning amplifier off');
        };
        Amplifier.prototype.setCd = function (cdPlayer) {
            console.log('setting CD player');
            this.cdPlayer = cdPlayer;
        };
        Amplifier.prototype.setDvd = function (dvdPlayer) {
            console.log('setting DVD player');
            this.dvdPlayer = dvdPlayer;
        };
        Amplifier.prototype.setStereoSound = function () {
            console.log('setting stereo sound');
        };
        Amplifier.prototype.setSurroundSound = function () {
            console.log('setting surround sound');
        };
        Amplifier.prototype.setTuner = function (tuner) {
            this.tuner = tuner;
        };
        Amplifier.prototype.setVolume = function () {
            console.log('setting volume');
        };
        return Amplifier;
    }());
    exports.Amplifier = Amplifier;
});
//# sourceMappingURL=Amplifier.js.map