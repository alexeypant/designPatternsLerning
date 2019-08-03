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
    var Projector = (function () {
        function Projector(dvdPlayer) {
            this.dvdPlayer = dvdPlayer;
        }
        Projector.prototype.on = function () {
            console.log('turning projector on');
        };
        Projector.prototype.off = function () {
            console.log('turning projector off');
        };
        Projector.prototype.tvMode = function () {
            console.log('turning projector to tvMode');
        };
        Projector.prototype.wideScreenMode = function () {
            console.log('turning projector to wide screen mode');
        };
        return Projector;
    }());
    exports.Projector = Projector;
});
//# sourceMappingURL=Projector.js.map