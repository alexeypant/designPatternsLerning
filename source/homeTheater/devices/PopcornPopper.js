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
    var PopcornPopper = (function () {
        function PopcornPopper() {
        }
        PopcornPopper.prototype.on = function () {
            console.log('turning popcorn popper on');
        };
        PopcornPopper.prototype.off = function () {
            console.log('turning popcorn popper off');
        };
        PopcornPopper.prototype.pop = function () {
            console.log('popping some popcorn');
        };
        return PopcornPopper;
    }());
    exports.PopcornPopper = PopcornPopper;
});
//# sourceMappingURL=PopcornPopper.js.map