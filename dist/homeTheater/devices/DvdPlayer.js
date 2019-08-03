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
    var DvdPlayer = (function () {
        function DvdPlayer() {
        }
        DvdPlayer.prototype.on = function () {
            console.log('turning DVD on');
        };
        DvdPlayer.prototype.off = function () {
            console.log('turning DVD off');
        };
        DvdPlayer.prototype.eject = function () {
            console.log('ejecting DVD');
        };
        DvdPlayer.prototype.pause = function () {
            console.log('pausing DVD');
        };
        DvdPlayer.prototype.play = function () {
            console.log('playing DVD');
        };
        DvdPlayer.prototype.setSurroundAudio = function () {
            console.log('setting surround audio');
        };
        DvdPlayer.prototype.setTwoChannelAudio = function () {
            console.log('setting two channel audio');
        };
        DvdPlayer.prototype.stop = function () {
            console.log('stopping DVD');
        };
        return DvdPlayer;
    }());
    exports.DvdPlayer = DvdPlayer;
});
//# sourceMappingURL=DvdPlayer.js.map