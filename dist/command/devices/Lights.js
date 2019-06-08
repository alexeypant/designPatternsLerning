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
    var Lights = (function () {
        function Lights() {
        }
        Lights.prototype.on = function () {
            console.log('switching lights on');
        };
        Lights.prototype.off = function () {
            console.log('switching lights off');
        };
        return Lights;
    }());
    exports.Lights = Lights;
});
//# sourceMappingURL=Lights.js.map