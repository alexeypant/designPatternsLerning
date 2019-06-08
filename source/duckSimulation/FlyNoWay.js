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
    var FlyNoWay = (function () {
        function FlyNoWay() {
        }
        FlyNoWay.prototype.fly = function () {
            console.log('sorry, I can not fly');
        };
        return FlyNoWay;
    }());
    exports.FlyNoWay = FlyNoWay;
});
//# sourceMappingURL=FlyNoWay.js.map