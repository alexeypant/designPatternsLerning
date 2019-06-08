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
    var ChocolateBoiler = (function () {
        function ChocolateBoiler() {
            this.empty = true;
            this.boiled = false;
            console.log('constructoring the ChocolateBoiler');
        }
        ChocolateBoiler.getInstance = function () {
            if (!this.instance) {
                this.instance = new ChocolateBoiler();
            }
            console.log('providing instance of the ChocolateBoiler');
            return this.instance;
        };
        ChocolateBoiler.prototype.fill = function () {
            if (this.empty) {
                console.log('filling the boiler');
                this.empty = false;
                this.boiled = false;
            }
        };
        ChocolateBoiler.prototype.drain = function () {
            if (!this.empty && this.boiled) {
                console.log('draining the bolier');
                this.empty = true;
            }
        };
        ChocolateBoiler.prototype.boil = function () {
            if (!this.empty && !this.boiled) {
                console.log('boiling the mixture');
                this.boiled = true;
            }
        };
        ChocolateBoiler.prototype.isEmpty = function () {
            return this.empty;
        };
        ChocolateBoiler.prototype.isBoiled = function () {
            return this.boiled;
        };
        ChocolateBoiler.instance = null;
        return ChocolateBoiler;
    }());
    exports.ChocolateBoiler = ChocolateBoiler;
});
//# sourceMappingURL=ChocolateBoiler.js.map