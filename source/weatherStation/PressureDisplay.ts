import {IDisplayElement} from "../../dist/weatherStation/IDisplayElement";
import {IObserver} from "../../dist/weatherStation/IObserver";
import {ISubject} from "../../dist/weatherStation/ISubject";

export class PressureDisplay implements IDisplayElement, IObserver{
    weatherData: ISubject;
    pressure: number;

    constructor(weatherData: ISubject){
      this.weatherData = weatherData;
      weatherData.registerObserver(this);
    }

    display(): void {
        console.log(`the current pressure is ${this.pressure}`);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.pressure = pressure;
        this.display();
    }

}