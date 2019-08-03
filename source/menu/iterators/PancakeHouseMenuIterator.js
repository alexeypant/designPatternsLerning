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
    var PancakeHouseMenuIterator = (function () {
        function PancakeHouseMenuIterator(menuItems) {
            this.menuItems = menuItems;
            this.position = -1;
        }
        PancakeHouseMenuIterator.prototype.hasNext = function () {
            return (this.position + 1) < this.menuItems.length;
        };
        PancakeHouseMenuIterator.prototype.next = function () {
            this.position += 1;
            return this.menuItems[this.position];
        };
        return PancakeHouseMenuIterator;
    }());
    exports.PancakeHouseMenuIterator = PancakeHouseMenuIterator;
});
//# sourceMappingURL=PancakeHouseMenuIterator.js.map