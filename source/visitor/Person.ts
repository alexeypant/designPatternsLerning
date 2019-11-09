import { IDoctor } from './Doctor';
import { EHealth } from './EHealth';

export interface IPerson {
  name: string;
  getName: () => string;
  getHealth: () => EHealth;
  setHealth: (newHealth: EHealth) => void;
  acceptDoctor: (doctor: IDoctor) => void;
}

export class Person implements IPerson {
  constructor(public name: string, private health: EHealth){
  }

  getHealth(): EHealth {
    return this.health;
  }

  setHealth(newHealth: EHealth) {
    this.health = newHealth;
  }

  getName(): string {
    return this.name;
  }

  acceptDoctor(doctor: IDoctor): void {
    doctor.applyTherapy(this)
  }

}
