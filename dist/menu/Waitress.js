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
    var Waitress = (function () {
        function Waitress(pancakeHouseMenu, dinerMenu) {
            this.pancakeHouseMenu = pancakeHouseMenu;
            this.dinerMenu = dinerMenu;
        }
        Waitress.prototype.printMenu = function () {
            var pancakeIterator = this.pancakeHouseMenu.createIterator();
            console.log('Pancake House Menu');
            this.printMenuItems(pancakeIterator);
            var dinerIterator = this.dinerMenu.createIterator();
            console.log('Diner Menu');
            this.printMenuItems(dinerIterator);
        };
        Waitress.prototype.printVegetarianMenu = function () {
            var pancakeIterator = this.pancakeHouseMenu.createIterator();
            var dinerIterator = this.dinerMenu.createIterator();
            console.log('Vegetarian Menu');
            while (pancakeIterator.hasNext()) {
                var menuItem = pancakeIterator.next();
                if (menuItem.checkVegetarian()) {
                    this.printItem(menuItem);
                }
            }
            while (dinerIterator.hasNext()) {
                var menuItem = dinerIterator.next();
                if (menuItem.checkVegetarian()) {
                    this.printItem(menuItem);
                }
            }
        };
        Waitress.prototype.printMenuItems = function (iterator) {
            while (iterator.hasNext()) {
                var menuItem = iterator.next();
                this.printItem(menuItem);
            }
        };
        Waitress.prototype.printItem = function (item) {
            console.log(item.getName());
            console.log(item.getDescription());
            console.log(item.getPrice());
        };
        Waitress.prototype.isItemVegetarian = function (name) {
            var pancakeIterator = this.pancakeHouseMenu.createIterator();
            var searchResult = null;
            while (pancakeIterator.hasNext()) {
                var nextItem = pancakeIterator.next();
                if (nextItem.getName() === name) {
                    searchResult = nextItem;
                    break;
                }
            }
            var dinnerIterator = this.dinerMenu.createIterator();
            while (!searchResult && dinnerIterator.hasNext()) {
                var nextItem = dinnerIterator.next();
                if (nextItem.getName() === name) {
                    searchResult = nextItem;
                    break;
                }
            }
            return searchResult.checkVegetarian();
        };
        return Waitress;
    }());
    exports.Waitress = Waitress;
});
//# sourceMappingURL=Waitress.js.map