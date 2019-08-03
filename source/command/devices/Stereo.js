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
    var Stereo = (function () {
        function Stereo() {
        }
        Stereo.prototype.on = function () {
            console.log('switching stereo on');
        };
        Stereo.prototype.off = function () {
            console.log('switching stereo off');
        };
        Stereo.prototype.setCD = function () {
            console.log('set CD');
        };
        Stereo.prototype.setDVD = function () {
            console.log('set DVD');
        };
        Stereo.prototype.setRadio = function () {
            console.log('set Radio');
        };
        Stereo.prototype.setVolume = function () {
            console.log('set volume');
        };
        return Stereo;
    }());
    exports.Stereo = Stereo;
});
//# sourceMappingURL=Stereo.js.map