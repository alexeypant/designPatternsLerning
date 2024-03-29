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
    var Tea = (function (_super) {
        __extends(Tea, _super);
        function Tea() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tea.prototype.brew = function () {
            console.log('steeping tea bag');
        };
        Tea.prototype.addCondiments = function () {
            console.log('adding lemon');
        };
        return Tea;
    }(CaffeineBeverage_1.CaffeineBeverage));
    exports.Tea = Tea;
});
//# sourceMappingURL=Tea.js.map