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
import {GarageDoor, IGarageDoor} from "../source/command/devices/GarageDoor";
import {GarageDoorOpenCommand} from "../source/command/commands/GarageDoorOpenCommand";
import {RemoteControl} from "../source/command/remoteControls/RemoteControl";
import {IStereo, Stereo} from "../source/command/devices/Stereo";
import {ICommand} from "../source/command/commands/ICommand";
import {LightOffCommand} from "../source/command/commands/LightOffCommand";
import {StereoOnCommand} from "../source/command/commands/StereoOnCommand";
import {StereoOffCommand} from "../source/command/commands/StereoOffCommand";

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
        console.log('trying to make one more instance of ChocoBoiler');
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

    });

    it('controlling garage door', () => {
        const simpleRemote = new SimpleRemoteControl();
        const garageDoor: IGarageDoor = new GarageDoor();
        const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
        simpleRemote.setCommand(garageDoorOpenCommand);
        simpleRemote.buttonWasPressed();
        assert.ok(true);

    })
});


describe('Remote control', () => {
    it('controlling devices', () => {
        const remoteControl = new RemoteControl();
        const livingRoomLights: ILights = new Lights();
        const kitchenLights: ILights = new Lights();
        const stereo: IStereo = new Stereo();

        const livingRoomLightOnCommand: ICommand = new LightOnCommand(livingRoomLights);
        const livingRoomLightOffCommand: ICommand = new LightOffCommand(livingRoomLights);
        const kitchenLightOnCommand: ICommand = new LightOnCommand(kitchenLights);
        const kitchenLightOffCommand: ICommand = new LightOffCommand(kitchenLights);
        const stereoOnCommand: ICommand = new StereoOnCommand(stereo);
        const stereoOffCommand: ICommand = new StereoOffCommand(stereo);

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

describe('Remote control with undo button', () => {
    it('controlling devices with undo', () => {
        const remoteControl = new RemoteControl();
        const livingRoomLights: ILights = new Lights();
        const kitchenLights: ILights = new Lights();
        const stereo: IStereo = new Stereo();

        const livingRoomLightOnCommand: ICommand = new LightOnCommand(livingRoomLights);
        const livingRoomLightOffCommand: ICommand = new LightOffCommand(livingRoomLights);
        const kitchenLightOnCommand: ICommand = new LightOnCommand(kitchenLights);
        const kitchenLightOffCommand: ICommand = new LightOffCommand(kitchenLights);
        const stereoOnCommand: ICommand = new StereoOnCommand(stereo);
        const stereoOffCommand: ICommand = new StereoOffCommand(stereo);

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
