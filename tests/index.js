(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../dist/RubberDuck", "../dist/weatherStation/WeatherData", "../dist/weatherStation/CurrentConditionsDisplay", "../dist/weatherStation/HumidityDisplay", "../dist/weatherStation/PressureDisplay", "../dist/coffeeAddsOns/Espresso", "../dist/coffeeAddsOns/Whip", "../source/singleton/ChocolateBoiler", "../source/command/remoteControls/SimpleRemoteControl", "../source/command/devices/Lights", "../source/command/commands/LightOnCommand", "../source/command/devices/GarageDoor", "../source/command/commands/GarageDoorOpenCommand", "../source/command/remoteControls/RemoteControl", "../source/command/devices/Stereo", "../source/command/commands/LightOffCommand", "../source/command/commands/StereoOnCommand", "../source/command/commands/StereoOffCommand", "../source/homeTheater/devices/Amplifier", "../source/homeTheater/devices/PopcornPopper", "../source/homeTheater/devices/Tuner", "../source/homeTheater/devices/Projector", "../source/homeTheater/devices/DvdPlayer", "../source/homeTheater/devices/CdPlayer", "../source/homeTheater/devices/Screen", "../source/homeTheater/HomeTheaterFacade", "../source/homeTheater/devices/TheaterLights", "../source/starbuzz/beverages/Tea", "../source/starbuzz/beverages/Coffee", "../source/starbuzz/beverages/CoffeeWithHook", "../source/menu/menus/PancakeHouseMenu", "../source/menu/menus/DinerMenu", "../source/menu/Waitress", "../source/visitor/Person", "../source/visitor/EHealth", "../source/visitor/Doctor"], factory);
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
    var Amplifier_1 = require("../source/homeTheater/devices/Amplifier");
    var PopcornPopper_1 = require("../source/homeTheater/devices/PopcornPopper");
    var Tuner_1 = require("../source/homeTheater/devices/Tuner");
    var Projector_1 = require("../source/homeTheater/devices/Projector");
    var DvdPlayer_1 = require("../source/homeTheater/devices/DvdPlayer");
    var CdPlayer_1 = require("../source/homeTheater/devices/CdPlayer");
    var Screen_1 = require("../source/homeTheater/devices/Screen");
    var HomeTheaterFacade_1 = require("../source/homeTheater/HomeTheaterFacade");
    var TheaterLights_1 = require("../source/homeTheater/devices/TheaterLights");
    var Tea_1 = require("../source/starbuzz/beverages/Tea");
    var Coffee_1 = require("../source/starbuzz/beverages/Coffee");
    var CoffeeWithHook_1 = require("../source/starbuzz/beverages/CoffeeWithHook");
    var PancakeHouseMenu_1 = require("../source/menu/menus/PancakeHouseMenu");
    var DinerMenu_1 = require("../source/menu/menus/DinerMenu");
    var Waitress_1 = require("../source/menu/Waitress");
    var Person_1 = require("../source/visitor/Person");
    var EHealth_1 = require("../source/visitor/EHealth");
    var Doctor_1 = require("../source/visitor/Doctor");
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
    describe('Home theater system implementing facade', function () {
        var popper = new PopcornPopper_1.PopcornPopper();
        var lights = new TheaterLights_1.TheaterLights();
        var screen = new Screen_1.Screen();
        var tuner = new Tuner_1.Tuner();
        var dvdPlayer = new DvdPlayer_1.DvdPlayer();
        var cdPlayer = new CdPlayer_1.CdPlayer();
        var amplifier = new Amplifier_1.Amplifier(tuner, dvdPlayer, cdPlayer);
        var projector = new Projector_1.Projector(dvdPlayer);
        var homeTheater = new HomeTheaterFacade_1.HomeTheaterFacade(amplifier, tuner, dvdPlayer, cdPlayer, projector, lights, screen, popper);
        it('turning home theater on', function () {
            homeTheater.watchMovie();
            assert.ok(true);
        });
        it('turning home theater off', function () {
            homeTheater.endMovie();
            assert.ok(true);
        });
    });
    describe('making tea and coffee', function () {
        var tea = new Tea_1.Tea();
        it('making tea', function () {
            var tea = new Tea_1.Tea();
            tea.prepareRecipe();
        });
        it('making coffee', function () {
            var coffee = new Coffee_1.Coffee();
            coffee.prepareRecipe();
        });
        it('making coffee with hook', function () {
            var coffee = new CoffeeWithHook_1.CoffeeWithHook(false);
            coffee.prepareRecipe();
        });
    });
    describe('iterating through menu items', function () {
        it('should print menu all items', function () {
            var pancakeMenu = new PancakeHouseMenu_1.PancakeHouseMenu();
            var dinerMenu = new DinerMenu_1.DinerMenu();
            var waitress = new Waitress_1.Waitress(pancakeMenu, dinerMenu);
            waitress.printMenu();
        });
        it('should print vegetarian items', function () {
            var pancakeMenu = new PancakeHouseMenu_1.PancakeHouseMenu();
            var dinerMenu = new DinerMenu_1.DinerMenu();
            var waitress = new Waitress_1.Waitress(pancakeMenu, dinerMenu);
            waitress.printVegetarianMenu();
        });
        it('should print true if the item is vegetarian', function () {
            var pancakeMenu = new PancakeHouseMenu_1.PancakeHouseMenu();
            var dinerMenu = new DinerMenu_1.DinerMenu();
            var waitress = new Waitress_1.Waitress(pancakeMenu, dinerMenu);
            var result = waitress.isItemVegetarian('bliny');
            console.log(result);
        });
    });
    describe('healing the people', function () {
        it('should make health better', function () {
            var people = [
                new Person_1.Person('John', EHealth_1.EHealth.good),
                new Person_1.Person('Martin', EHealth_1.EHealth.normal),
                new Person_1.Person('Victor', EHealth_1.EHealth.bad),
            ];
            var doctor = new Doctor_1.Doctor();
            for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
                var person = people_1[_i];
                person.acceptDoctor(doctor);
            }
            assert.strictEqual(people[0].getHealth(), EHealth_1.EHealth.good);
            assert.strictEqual(people[1].getHealth(), EHealth_1.EHealth.good);
            assert.strictEqual(people[2].getHealth(), EHealth_1.EHealth.normal);
        });
    });
});
//# sourceMappingURL=index.js.map