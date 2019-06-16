(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../dist/RubberDuck", "../dist/weatherStation/WeatherData", "../dist/weatherStation/CurrentConditionsDisplay", "../dist/weatherStation/HumidityDisplay", "../dist/weatherStation/PressureDisplay", "../dist/coffeeAddsOns/Espresso", "../dist/coffeeAddsOns/Whip", "../source/singleton/ChocolateBoiler", "../source/command/remoteControls/SimpleRemoteControl", "../source/command/devices/Lights", "../source/command/commands/LightOnCommand", "../source/command/devices/GarageDoor", "../source/command/commands/GarageDoorOpenCommand", "../source/command/remoteControls/RemoteControl", "../source/command/devices/Stereo", "../source/command/commands/LightOffCommand", "../source/command/commands/StereoOnCommand", "../source/command/commands/StereoOffCommand"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    var assert = require("assert");
    var RubberDuck_1 = require("../dist/RubberDuck");
    var WeatherData_1 = require("../dist/weatherStation/WeatherData");
    var CurrentConditionsDisplay_1 = require("../dist/weatherStation/CurrentConditionsDisplay");
    var HumidityDisplay_1 = require("../dist/weatherStation/HumidityDisplay");
    var PressureDisplay_1 = require("../dist/weatherStation/PressureDisplay");
    var Espresso_1 = require("../dist/coffeeAddsOns/Espresso");
    var Whip_1 = require("../dist/coffeeAddsOns/Whip");
    var ChocolateBoiler_1 = require("../source/singleton/ChocolateBoiler");
    var SimpleRemoteControl_1 = require("../source/command/remoteControls/SimpleRemoteControl");
    var Lights_1 = require("../source/command/devices/Lights");
    var LightOnCommand_1 = require("../source/command/commands/LightOnCommand");
    var GarageDoor_1 = require("../source/command/devices/GarageDoor");
    var GarageDoorOpenCommand_1 = require("../source/command/commands/GarageDoorOpenCommand");
    var RemoteControl_1 = require("../source/command/remoteControls/RemoteControl");
    var Stereo_1 = require("../source/command/devices/Stereo");
    var LightOffCommand_1 = require("../source/command/commands/LightOffCommand");
    var StereoOnCommand_1 = require("../source/command/commands/StereoOnCommand");
    var StereoOffCommand_1 = require("../source/command/commands/StereoOffCommand");
    describe('duckSim', function () {
        it('rubber duck', function () {
            var rubberDuck = new RubberDuck_1.RubberDuck();
            rubberDuck.performFly();
            assert.ok(true);
        });
    });
    describe('weatherStation', function () {
        it('rubber duck', function () {
            var weatherData = new WeatherData_1.WeatherData();
            var currentConditionsDisplay = new CurrentConditionsDisplay_1.CurrentConditionsDisplay(weatherData);
            var humidityDisplay = new HumidityDisplay_1.HumidityDisplay(weatherData);
            var pressureDisplay = new PressureDisplay_1.PressureDisplay(weatherData);
            weatherData.setMeasurements(10, 20, 30);
            weatherData.measurementsChanged();
            weatherData.removeObserver(currentConditionsDisplay);
            weatherData.setMeasurements(1, 2, 3);
            weatherData.measurementsChanged();
            assert.ok(true);
        });
    });
    describe('coffeeAddOns', function () {
        it('coffee add ons', function () {
            var myDrink = new Espresso_1.Espresso();
            console.log(myDrink.getDescription());
            console.log(myDrink.getCost());
            var myDrink2M = new Whip_1.Whip(myDrink);
            console.log(myDrink2M.getDescription());
            console.log(myDrink2M.getCost());
            var myDrink3M = new Whip_1.Whip(myDrink2M);
            console.log(myDrink3M.getDescription());
            console.log(myDrink3M.getCost());
            assert.ok(true);
        });
    });
    describe('Chocolate Boiler', function () {
        it('boiling chokolate', function () {
            console.log('trying to make instance of ChokoBoiler');
            var chocolateBoiler = ChocolateBoiler_1.ChocolateBoiler.getInstance();
            chocolateBoiler.fill();
            chocolateBoiler.boil();
            chocolateBoiler.drain();
            console.log('trying to make one more instance of ChocoBoiler');
            var boilerTwo = ChocolateBoiler_1.ChocolateBoiler.getInstance();
            boilerTwo.boil();
            boilerTwo.drain();
            boilerTwo.fill();
            assert.ok(true);
        });
    });
    describe('Simple remote control test', function () {
        it('controlling the lights', function () {
            var simpleRemote = new SimpleRemoteControl_1.SimpleRemoteControl();
            var lights = new Lights_1.Lights();
            var lightsOnCommand = new LightOnCommand_1.LightOnCommand(lights);
            simpleRemote.setCommand(lightsOnCommand);
            simpleRemote.buttonWasPressed();
            assert.ok(true);
        });
        it('controlling garage door', function () {
            var simpleRemote = new SimpleRemoteControl_1.SimpleRemoteControl();
            var garageDoor = new GarageDoor_1.GarageDoor();
            var garageDoorOpenCommand = new GarageDoorOpenCommand_1.GarageDoorOpenCommand(garageDoor);
            simpleRemote.setCommand(garageDoorOpenCommand);
            simpleRemote.buttonWasPressed();
            assert.ok(true);
        });
    });
    describe('Remote control', function () {
        it('controlling devices', function () {
            var remoteControl = new RemoteControl_1.RemoteControl();
            var livingRoomLights = new Lights_1.Lights();
            var kitchenLights = new Lights_1.Lights();
            var stereo = new Stereo_1.Stereo();
            var livingRoomLightOnCommand = new LightOnCommand_1.LightOnCommand(livingRoomLights);
            var livingRoomLightOffCommand = new LightOffCommand_1.LightOffCommand(livingRoomLights);
            var kitchenLightOnCommand = new LightOnCommand_1.LightOnCommand(kitchenLights);
            var kitchenLightOffCommand = new LightOffCommand_1.LightOffCommand(kitchenLights);
            var stereoOnCommand = new StereoOnCommand_1.StereoOnCommand(stereo);
            var stereoOffCommand = new StereoOffCommand_1.StereoOffCommand(stereo);
            remoteControl.setCommand(0, livingRoomLightOnCommand, livingRoomLightOffCommand);
            remoteControl.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand);
            remoteControl.setCommand(2, stereoOnCommand, stereoOffCommand);
            remoteControl.onButtonWasPushed(0);
            remoteControl.offButtonWasPushed(0);
            remoteControl.onButtonWasPushed(1);
            remoteControl.offButtonWasPushed(1);
            remoteControl.onButtonWasPushed(2);
            remoteControl.offButtonWasPushed(2);
            assert.ok(true);
        });
    });
    describe('Remote control with undo button', function () {
        it('controlling devices with undo', function () {
            var remoteControl = new RemoteControl_1.RemoteControl();
            var livingRoomLights = new Lights_1.Lights();
            var kitchenLights = new Lights_1.Lights();
            var stereo = new Stereo_1.Stereo();
            var livingRoomLightOnCommand = new LightOnCommand_1.LightOnCommand(livingRoomLights);
            var livingRoomLightOffCommand = new LightOffCommand_1.LightOffCommand(livingRoomLights);
            var kitchenLightOnCommand = new LightOnCommand_1.LightOnCommand(kitchenLights);
            var kitchenLightOffCommand = new LightOffCommand_1.LightOffCommand(kitchenLights);
            var stereoOnCommand = new StereoOnCommand_1.StereoOnCommand(stereo);
            var stereoOffCommand = new StereoOffCommand_1.StereoOffCommand(stereo);
            remoteControl.setCommand(0, livingRoomLightOnCommand, livingRoomLightOffCommand);
            remoteControl.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand);
            remoteControl.setCommand(2, stereoOnCommand, stereoOffCommand);
            remoteControl.onButtonWasPushed(0);
            remoteControl.undoButtonWasPushed();
            remoteControl.onButtonWasPushed(1);
            remoteControl.undoButtonWasPushed();
            remoteControl.onButtonWasPushed(2);
            remoteControl.undoButtonWasPushed();
            assert.ok(true);
        });
    });
});
//# sourceMappingURL=index.js.map