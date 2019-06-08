var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../dist/coffeeAddsOns/CondimentDecorator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CondimentDecorator_1 = require("../../dist/coffeeAddsOns/CondimentDecorator");
    var Mocha = (function (_super) {
        __extends(Mocha, _super);
        function Mocha(beverage) {
            var _this = _super.call(this) || this;
            _this.beverage = beverage;
            return _this;
        }
        Mocha.prototype.getDescription = function () {
            return this.beverage.getDescription() + ", Mocha";
        };
        Mocha.prototype.getCost = function () {
            return (0.20 + this.beverage.getCost());
        };
        return Mocha;
    }(CondimentDecorator_1.CondimentDecorator));
    exports.Mocha = Mocha;
});
//# sourceMappingURL=Mocha.js.map