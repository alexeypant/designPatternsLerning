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
        define(["require", "exports", "../../dist/coffeeAddsOns/Beverage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Beverage_1 = require("../../dist/coffeeAddsOns/Beverage");
    var CondimentDecorator = (function (_super) {
        __extends(CondimentDecorator, _super);
        function CondimentDecorator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CondimentDecorator;
    }(Beverage_1.Beverage));
    exports.CondimentDecorator = CondimentDecorator;
});
//# sourceMappingURL=CondimentDecorator.js.map