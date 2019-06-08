import 'mocha';
import * as assert from "assert";
import {RubberDuck} from "../dist/RubberDuck";
import {WeatherData} from "../dist/weatherStation/WeatherData";
import {CurrentConditionsDisplay} from "../dist/weatherStation/CurrentConditionsDisplay";
import {HumidityDisplay} from "../dist/weatherStation/HumidityDisplay";
import {PressureDisplay} from "../dist/weatherStation/PressureDisplay";
import {Beverage} from "../dist/coffeeAddsOns/Beverage";
import {Espresso} from "../dist/coffeeAddsOns/Espresso";
import {Whip} from "../dist/coffeeAddsOns/Whip";
import {ChocolateBoiler, IChocolateBoiler} from "../source/singleton/ChocolateBoiler";
import {SimpleRemoteControl} from "../source/command/remoteControls/SimpleRemoteControl";
import {ILights, Lights} from "../source/command/devices/Lights";
import {LightOnCommand} from "../source/command/commands/LightOnCommand";

describe('duckSim', () => {
    it('rubber duck', () => {
        const rubberDuck = new RubberDuck();
        rubberDuck.performFly();

        assert.ok(true);

    })
});

describe('weatherStation', () => {
    it('rubber duck', () => {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        const humidityDisplay = new HumidityDisplay(weatherData);
        const pressureDisplay = new PressureDisplay(weatherData);

        weatherData.setMeasurements(10, 20, 30);
        weatherData.measurementsChanged();
        weatherData.removeObserver(currentConditionsDisplay);
        weatherData.setMeasurements(1, 2, 3);
        weatherData.measurementsChanged();

        assert.ok(true);

    })
});

describe('coffeeAddOns', () => {
    it('coffee add ons', () => {
        const myDrink: Beverage = new Espresso();
        console.log(myDrink.getDescription());
        console.log(myDrink.getCost());

        const myDrink2M: Beverage = new Whip(myDrink);
        console.log(myDrink2M.getDescription());
        console.log(myDrink2M.getCost());

        const myDrink3M: Beverage = new Whip(myDrink2M);
        console.log(myDrink3M.getDescription());
        console.log(myDrink3M.getCost());

        assert.ok(true);

    })
});

describe('Chocolate Boiler', () => {
    it('boiling chokolate', () => {
        console.log('trying to make instance of ChokoBoiler');
        const chocolateBoiler: IChocolateBoiler = ChocolateBoiler.getInstance();
        chocolateBoiler.fill();
        chocolateBoiler.boil();
        chocolateBoiler.drain();
        console.log('trying to make one more instance of ChocoBoiler')
        const boilerTwo: IChocolateBoiler = ChocolateBoiler.getInstance();
        boilerTwo.boil();
        boilerTwo.drain();
        boilerTwo.fill();
        assert.ok(true);

    })
});


describe('Simple remote control test', () => {
    it('controlling the lights', () => {
        const simpleRemote = new SimpleRemoteControl();
        const lights: ILights = new Lights();
        const lightsOnCommand = new LightOnCommand(lights);
        simpleRemote.setCommand(lightsOnCommand);
        simpleRemote.buttonWasPressed();
        assert.ok(true);

    })
});
