(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MenuItem", "../iterators/DinerMenuIterator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MenuItem_1 = require("./MenuItem");
    var DinerMenuIterator_1 = require("../iterators/DinerMenuIterator");
    var DinerMenu = (function () {
        function DinerMenu() {
            this.maxItemsCount = 6;
            this.numberOfItems = 0;
            this.menuItems = {};
            this.addItem('pelmeny', 'traditional russian food', false, 5);
            this.addItem('gaspacho', 'traditional spanish cold soup', true, 3);
        }
        DinerMenu.prototype.addItem = function (name, description, isVegetarian, price) {
            var menuItem = new MenuItem_1.MenuItem(name, description, isVegetarian, price);
            if (this.numberOfItems >= this.maxItemsCount) {
                console.log('Sorry, menu is full, can not add new items');
            }
            else {
                this.menuItems[this.numberOfItems] = menuItem;
                this.numberOfItems += 1;
            }
        };
        DinerMenu.prototype.createIterator = function () {
            return new DinerMenuIterator_1.DinerMenuIterator(this.menuItems);
        };
        return DinerMenu;
    }());
    exports.DinerMenu = DinerMenu;
});
//# sourceMappingURL=DinerMenu.js.map