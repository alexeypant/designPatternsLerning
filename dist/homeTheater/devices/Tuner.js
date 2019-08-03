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
    var Tuner = (function () {
        function Tuner() {
        }
        Tuner.prototype.on = function () {
            console.log('turning tuner on');
        };
        Tuner.prototype.off = function () {
            console.log('turning tuner off');
        };
        Tuner.prototype.setAm = function () {
            console.log('setting AM');
        };
        Tuner.prototype.setFm = function () {
            console.log('setting FM');
        };
        Tuner.prototype.setFrequency = function () {
            console.log('setting frequency');
        };
        return Tuner;
    }());
    exports.Tuner = Tuner;
});
//# sourceMappingURL=Tuner.js.map