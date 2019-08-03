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
    var Screen = (function () {
        function Screen() {
        }
        Screen.prototype.up = function () {
            console.log('moving screen up');
        };
        Screen.prototype.down = function () {
            console.log('moving screen down');
        };
        return Screen;
    }());
    exports.Screen = Screen;
});
//# sourceMappingURL=Screen.js.map