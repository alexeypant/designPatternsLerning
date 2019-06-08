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
    var CurrentConditionsDisplay = (function () {
        function CurrentConditionsDisplay(weatherData) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
        CurrentConditionsDisplay.prototype.display = function () {
            console.log("the current temperature is " + this.temperature + ", humidity is " + this.humidity);
        };
        CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.display();
        };
        return CurrentConditionsDisplay;
    }());
    exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
});
//# sourceMappingURL=CurrentConditionsDisplay.js.map