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
    var Duck = (function () {
        function Duck() {
        }
        Duck.prototype.performFly = function () {
            this.flyBehaviour.fly();
        };
        Duck.prototype.setFlyBehaviour = function (newFlyBehaviour) {
            this.flyBehaviour = newFlyBehaviour;
        };
        return Duck;
    }());
    exports.Duck = Duck;
});
//# sourceMappingURL=Duck.js.map