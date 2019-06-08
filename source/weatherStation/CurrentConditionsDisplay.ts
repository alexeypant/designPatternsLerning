import {IDisplayElement} from "../../dist/weatherStation/IDisplayElement";
import {IObserver} from "../../dist/weatherStation/IObserver";
import {ISubject} from "../../dist/weatherStation/ISubject";

export class CurrentConditionsDisplay implements IDisplayElement, IObserver{
    weatherData: ISubject;
    temperature: number;
    humidity: number;

    constructor(weatherData: ISubject){
      this.weatherData = weatherData;
      weatherData.registerObserver(this);
    }

    display(): void {
        console.log(`the current temperature is ${this.temperature}, humidity is ${this.humidity}`);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

}