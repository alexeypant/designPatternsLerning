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
    var PressureDisplay = (function () {
        function PressureDisplay(weatherData) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
        PressureDisplay.prototype.display = function () {
            console.log("the current pressure is " + this.pressure);
        };
        PressureDisplay.prototype.update = function (temperature, humidity, pressure) {
            this.pressure = pressure;
            this.display();
        };
        return PressureDisplay;
    }());
    exports.PressureDisplay = PressureDisplay;
});
//# sourceMappingURL=PressureDisplay.js.map