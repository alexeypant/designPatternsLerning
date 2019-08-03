(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MenuItem", "../iterators/PancakeHouseMenuIterator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuItem_1 = require("./MenuItem");
    var PancakeHouseMenuIterator_1 = require("../iterators/PancakeHouseMenuIterator");
    var PancakeHouseMenu = (function () {
        function PancakeHouseMenu() {
            this.menuItems = [];
            this.addItem('bliny', 'russian pancakes', true, 2);
            this.addItem('hojuelas', 'mexican pancakes', false, 3);
        }
        PancakeHouseMenu.prototype.addItem = function (name, description, isVegetarian, price) {
            var menuItem = new MenuItem_1.MenuItem(name, description, isVegetarian, price);
            this.menuItems = this.menuItems.concat([menuItem]);
        };
        PancakeHouseMenu.prototype.createIterator = function () {
            return new PancakeHouseMenuIterator_1.PancakeHouseMenuIterator(this.menuItems);
        };
        return PancakeHouseMenu;
    }());
    exports.PancakeHouseMenu = PancakeHouseMenu;
});
//# sourceMappingURL=PancakeHouseMenu.js.map