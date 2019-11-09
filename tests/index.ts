import 'mocha';
import * as assert from "assert";
import { RubberDuck } from "../dist/RubberDuck";
import { WeatherData } from "../dist/weatherStation/WeatherData";
import { CurrentConditionsDisplay } from "../dist/weatherStation/CurrentConditionsDisplay";
import { HumidityDisplay } from "../dist/weatherStation/HumidityDisplay";
import { PressureDisplay } from "../dist/weatherStation/PressureDisplay";
import { Beverage } from "../dist/coffeeAddsOns/Beverage";
import { Espresso } from "../dist/coffeeAddsOns/Espresso";
import { Whip } from "../dist/coffeeAddsOns/Whip";
import { ChocolateBoiler, IChocolateBoiler } from "../source/singleton/ChocolateBoiler";
import { SimpleRemoteControl } from "../source/command/remoteControls/SimpleRemoteControl";
import { ILights, Lights } from "../source/command/devices/Lights";
import { LightOnCommand } from "../source/command/commands/LightOnCommand";
import { GarageDoor, IGarageDoor } from "../source/command/devices/GarageDoor";
import { GarageDoorOpenCommand } from "../source/command/commands/GarageDoorOpenCommand";
import { RemoteControl } from "../source/command/remoteControls/RemoteControl";
import { IStereo, Stereo } from "../source/command/devices/Stereo";
import { ICommand } from "../source/command/commands/ICommand";
import { LightOffCommand } from "../source/command/commands/LightOffCommand";
import { StereoOnCommand } from "../source/command/commands/StereoOnCommand";
import { StereoOffCommand } from "../source/command/commands/StereoOffCommand";
import { Amplifier, IAmplifier } from "../source/homeTheater/devices/Amplifier";
import { IPopcornPopper, PopcornPopper } from "../source/homeTheater/devices/PopcornPopper";
import { ITuner, Tuner } from "../source/homeTheater/devices/Tuner";
import { IProjector, Projector } from "../source/homeTheater/devices/Projector";
import { DvdPlayer, IDvdPlayer } from "../source/homeTheater/devices/DvdPlayer";
import { CdPlayer, ICdPlayer } from "../source/homeTheater/devices/CdPlayer";
import { IScreen, Screen } from "../source/homeTheater/devices/Screen";
import { HomeTheaterFacade, IHomeTheaterFacade } from "../source/homeTheater/HomeTheaterFacade";
import { ITheaterLights, TheaterLights } from "../source/homeTheater/devices/TheaterLights";
import { ICaffeineBeverage } from "../source/starbuzz/CaffeineBeverage";
import { Tea } from "../source/starbuzz/beverages/Tea";
import { Coffee } from "../source/starbuzz/beverages/Coffee";
import { CoffeeWithHook } from "../source/starbuzz/beverages/CoffeeWithHook";
import { IPancakeHouseMenu, PancakeHouseMenu } from "../source/menu/menus/PancakeHouseMenu";
import { DinerMenu, IDinerMenu } from "../source/menu/menus/DinerMenu";
import { IWaitress, Waitress } from "../source/menu/Waitress";
import { Person } from '../source/visitor/Person';
import { EHealth } from '../source/visitor/EHealth';
import { Doctor } from '../source/visitor/Doctor';

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


describe('Home theater system implementing facade', () => {
    const popper: IPopcornPopper = new PopcornPopper();
    const lights: ITheaterLights = new TheaterLights();
    const screen: IScreen = new Screen();
    const tuner: ITuner = new Tuner();
    const dvdPlayer: IDvdPlayer = new DvdPlayer();
    const cdPlayer: ICdPlayer = new CdPlayer();
    const amplifier: IAmplifier = new Amplifier(tuner, dvdPlayer, cdPlayer);
    const projector: IProjector = new Projector(dvdPlayer);

    const homeTheater: IHomeTheaterFacade = new HomeTheaterFacade(
        amplifier,
        tuner,
        dvdPlayer,
        cdPlayer,
        projector,
        lights,
        screen,
        popper,
    );

    it('turning home theater on', () => {
        homeTheater.watchMovie();
        assert.ok(true);
    });

    it('turning home theater off', () => {
        homeTheater.endMovie();
        assert.ok(true);
    });
});

describe('making tea and coffee', () => {
    const tea: ICaffeineBeverage = new Tea();

    it('making tea', () => {
        const tea: ICaffeineBeverage = new Tea();
        tea.prepareRecipe();
    });

    it('making coffee', () => {
        const coffee: ICaffeineBeverage = new Coffee();
        coffee.prepareRecipe();
    });

    it('making coffee with hook', () => {
        const coffee: ICaffeineBeverage = new CoffeeWithHook(false);
        coffee.prepareRecipe();
    });
});

describe('iterating through menu items', () => {

    it('should print menu all items', () => {
        const pancakeMenu: IPancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu: IDinerMenu = new DinerMenu();
        const waitress: IWaitress = new Waitress(pancakeMenu, dinerMenu);
        waitress.printMenu();
    });

    it('should print vegetarian items', () => {
        const pancakeMenu: IPancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu: IDinerMenu = new DinerMenu();
        const waitress: IWaitress = new Waitress(pancakeMenu, dinerMenu);
        waitress.printVegetarianMenu();
    });

    it('should print true if the item is vegetarian', () => {
        const pancakeMenu: IPancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu: IDinerMenu = new DinerMenu();
        const waitress: IWaitress = new Waitress(pancakeMenu, dinerMenu);
        const result = waitress.isItemVegetarian('bliny');
        console.log(result);
    });

});

describe('healing the people', () => {
    it('should make health better', () => {
        const people = [
            new Person('John', EHealth.good),
            new Person('Martin', EHealth.normal),
            new Person('Victor', EHealth.bad),
        ];
        const doctor = new Doctor();
        for (const person of people) {
            person.acceptDoctor(doctor);
        }
        assert.strictEqual(people[0].getHealth(), EHealth.good);
        assert.strictEqual(people[1].getHealth(), EHealth.good);
        assert.strictEqual(people[2].getHealth(), EHealth.normal);
    });
});
