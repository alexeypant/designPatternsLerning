import { IDisplayElement } from "../../dist/weatherStation/IDisplayElement";
import { IObserver } from "../../dist/weatherStation/IObserver";
import { ISubject } from "../../dist/weatherStation/ISubject";
export declare class CurrentConditionsDisplay implements IDisplayElement, IObserver {
    weatherData: ISubject;
    temperature: number;
    humidity: number;
    constructor(weatherData: ISubject);
    display(): void;
    update(temperature: number, humidity: number, pressure: number): void;
}
