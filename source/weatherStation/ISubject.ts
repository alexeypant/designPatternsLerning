import {IObserver} from "../../dist/weatherStation/IObserver";

export interface ISubject {
    registerObserver(o: IObserver): void;
    removeObserver(o: IObserver): void;
    notifyObservers(): void;
}