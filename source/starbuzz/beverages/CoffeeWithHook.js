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
        define(["require", "exports", "../CaffeineBeverage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CaffeineBeverage_1 = require("../CaffeineBeverage");
    var CoffeeWithHook = (function (_super) {
        __extends(CoffeeWithHook, _super);
        function CoffeeWithHook(isCondimentNeeded) {
            if (isCondimentNeeded === void 0) { isCondimentNeeded = true; }
            var _this = _super.call(this) || this;
            _this.isCondimentNeeded = isCondimentNeeded;
            return _this;
        }
        CoffeeWithHook.prototype.brew = function () {
            console.log('dripping coffee through filter');
        };
        CoffeeWithHook.prototype.addCondiments = function () {
            console.log('adding sugar and milk');
        };
        CoffeeWithHook.prototype.customerWantsCondiment = function () {
            return this.isCondimentNeeded;
        };
        return CoffeeWithHook;
    }(CaffeineBeverage_1.CaffeineBeverage));
    exports.CoffeeWithHook = CoffeeWithHook;
});
//# sourceMappingURL=CoffeeWithHook.js.map