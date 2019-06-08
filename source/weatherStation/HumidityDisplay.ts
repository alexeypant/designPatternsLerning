import {IDisplayElement} from "../../dist/weatherStation/IDisplayElement";
import {IObserver} from "../../dist/weatherStation/IObserver";
import {ISubject} from "../../dist/weatherStation/ISubject";

export class HumidityDisplay implements IDisplayElement, IObserver{
    weatherData: ISubject;
    humidity: number;

    constructor(weatherData: ISubject){
      this.weatherData = weatherData;
      weatherData.registerObserver(this);
    }

    display(): void {
        console.log(`the current humidity is ${this.humidity}`);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.humidity = humidity;
        this.display();
    }

}