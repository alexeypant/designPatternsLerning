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
    var HumidityDisplay = (function () {
        function HumidityDisplay(weatherData) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
        HumidityDisplay.prototype.display = function () {
            console.log("the current humidity is " + this.humidity);
        };
        HumidityDisplay.prototype.update = function (temperature, humidity, pressure) {
            this.humidity = humidity;
            this.display();
        };
        return HumidityDisplay;
    }());
    exports.HumidityDisplay = HumidityDisplay;
});
//# sourceMappingURL=HumidityDisplay.js.map