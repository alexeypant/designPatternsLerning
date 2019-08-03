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
    var CaffeineBeverage = (function () {
        function CaffeineBeverage() {
        }
        CaffeineBeverage.prototype.prepareRecipe = function () {
            this.boilWater();
            this.brew();
            this.pourInCup();
            if (this.customerWantsCondiment()) {
                this.addCondiments();
            }
        };
        CaffeineBeverage.prototype.boilWater = function () {
            console.log('boiling water');
        };
        CaffeineBeverage.prototype.brew = function () {
            console.log('brew beverage');
        };
        CaffeineBeverage.prototype.pourInCup = function () {
            console.log('pouring cup');
        };
        CaffeineBeverage.prototype.addCondiments = function () {
            console.log('adding condiments');
        };
        CaffeineBeverage.prototype.customerWantsCondiment = function () {
            return true;
        };
        return CaffeineBeverage;
    }());
    exports.CaffeineBeverage = CaffeineBeverage;
});
//# sourceMappingURL=CaffeineBeverage.js.map