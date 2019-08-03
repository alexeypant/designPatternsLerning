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
    var TheaterLights = (function () {
        function TheaterLights() {
        }
        TheaterLights.prototype.on = function () {
            console.log('turning lights on');
        };
        TheaterLights.prototype.off = function () {
            console.log('turning lights off');
        };
        TheaterLights.prototype.dim = function () {
            console.log('dimming lights');
        };
        return TheaterLights;
    }());
    exports.TheaterLights = TheaterLights;
});
//# sourceMappingURL=TheaterLights.js.map