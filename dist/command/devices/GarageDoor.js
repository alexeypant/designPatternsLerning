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
    var GarageDoor = (function () {
        function GarageDoor() {
        }
        GarageDoor.prototype.up = function () {
            console.log('door up');
        };
        GarageDoor.prototype.down = function () {
            console.log('door down');
        };
        GarageDoor.prototype.stop = function () {
            console.log('door stop');
        };
        GarageDoor.prototype.lightOn = function () {
            console.log('door light on');
        };
        GarageDoor.prototype.lightOff = function () {
            console.log('door light off');
        };
        return GarageDoor;
    }());
    exports.GarageDoor = GarageDoor;
});
//# sourceMappingURL=GarageDoor.js.map