import { ISubject } from "../../dist/weatherStation/ISubject";
import { IObserver } from "../../dist/weatherStation/IObserver";
export declare class WeatherData implements ISubject {
    observers: IObserver[];
    temperature: number;
    humidity: number;
    pressure: number;
    constructor();
    notifyObservers(): void;
    registerObserver(o: IObserver): void;
    removeObserver(o: IObserver): void;
    measurementsChanged(): void;
    setMeasurements(temp: number, hum: number, press: number): void;
}
