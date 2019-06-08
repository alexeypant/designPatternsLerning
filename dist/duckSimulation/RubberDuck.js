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
        define(["require", "exports", "./Duck", "../../dist/FlyNoWay"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Duck_1 = require("./Duck");
    var FlyNoWay_1 = require("../../dist/FlyNoWay");
    var RubberDuck = (function (_super) {
        __extends(RubberDuck, _super);
        function RubberDuck() {
            var _this = _super.call(this) || this;
            _this.flyBehaviour = new FlyNoWay_1.FlyNoWay();
            return _this;
        }
        return RubberDuck;
    }(Duck_1.Duck));
    exports.RubberDuck = RubberDuck;
});
//# sourceMappingURL=RubberDuck.js.map