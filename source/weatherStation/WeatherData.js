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
    var WeatherData = (function () {
        function WeatherData() {
            this.observers = [];
        }
        WeatherData.prototype.notifyObservers = function () {
            var _this = this;
            this.observers.forEach(function (observer) {
                observer.update(_this.temperature, _this.humidity, _this.pressure);
            });
        };
        WeatherData.prototype.registerObserver = function (o) {
            this.observers.push(o);
        };
        WeatherData.prototype.removeObserver = function (o) {
            var newObservers = this.observers.filter(function (observer) { return observer !== o; });
            this.observers = newObservers;
        };
        WeatherData.prototype.measurementsChanged = function () {
            this.notifyObservers();
        };
        WeatherData.prototype.setMeasurements = function (temp, hum, press) {
            this.temperature = temp;
            this.humidity = hum;
            this.pressure = press;
        };
        return WeatherData;
    }());
    exports.WeatherData = WeatherData;
});
//# sourceMappingURL=WeatherData.js.map