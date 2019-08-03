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
    var MenuItem = (function () {
        function MenuItem(name, description, isVegetarian, price) {
            this.name = name;
            this.description = description;
            this.isVegetarian = isVegetarian;
            this.price = price;
        }
        MenuItem.prototype.getName = function () {
            return this.name;
        };
        MenuItem.prototype.getDescription = function () {
            return this.description;
        };
        MenuItem.prototype.checkVegetarian = function () {
            return this.isVegetarian;
        };
        MenuItem.prototype.getPrice = function () {
            return this.price;
        };
        return MenuItem;
    }());
    exports.MenuItem = MenuItem;
});
//# sourceMappingURL=MenuItem.js.map