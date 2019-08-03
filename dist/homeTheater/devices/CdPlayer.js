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
    var CdPlayer = (function () {
        function CdPlayer() {
        }
        CdPlayer.prototype.on = function () {
            console.log('turning CD player on');
        };
        CdPlayer.prototype.off = function () {
            console.log('turning CD player off');
        };
        CdPlayer.prototype.eject = function () {
            console.log('ejecting CD');
        };
        CdPlayer.prototype.pause = function () {
            console.log('pausing CD player');
        };
        CdPlayer.prototype.play = function () {
            console.log('playing CD');
        };
        CdPlayer.prototype.stop = function () {
            console.log('stopping CD');
        };
        return CdPlayer;
    }());
    exports.CdPlayer = CdPlayer;
});
//# sourceMappingURL=CdPlayer.js.map