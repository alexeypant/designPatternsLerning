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
    var DinerMenuIterator = (function () {
        function DinerMenuIterator(menuItems) {
            this.menuItems = menuItems;
            this.position = -1;
        }
        DinerMenuIterator.prototype.hasNext = function () {
            return this.menuItems.hasOwnProperty(this.position + 1);
        };
        DinerMenuIterator.prototype.next = function () {
            this.position += 1;
            return this.menuItems[this.position];
        };
        return DinerMenuIterator;
    }());
    exports.DinerMenuIterator = DinerMenuIterator;
});
//# sourceMappingURL=DinerMenuIterator.js.map