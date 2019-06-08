import {ISubject} from "../../dist/weatherStation/ISubject";
import {IObserver} from "../../dist/weatherStation/IObserver";

export class WeatherData implements ISubject {
    observers: IObserver[];
    temperature: number;
    humidity: number;
    pressure: number;

    constructor(){
        this.observers = [];
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            observer.update(this.temperature, this.humidity, this.pressure);
        })
    }

    registerObserver(o: IObserver): void {
        this.observers.push(o);
    }

    removeObserver(o: IObserver): void {
        const newObservers = this.observers.filter(observer => observer !== o);
        this.observers = newObservers;
    }

    measurementsChanged(){
        this.notifyObservers();
    }

    setMeasurements(temp: number, hum: number, press: number){
      this.temperature = temp;
      this.humidity = hum;
      this.pressure = press;
    }

}