import { IPerson } from './Person';
import { EHealth } from './EHealth';

export interface IDoctor {
  applyTherapy: (person: IPerson) => void;
}

export class Doctor implements IDoctor {
  constructor(){}
  applyTherapy(person: IPerson): void {
    if (person.getHealth() === EHealth.normal) {
      person.setHealth(EHealth.good);
    }
    if (person.getHealth() === EHealth.bad) {
      person.setHealth(EHealth.normal);
    }
  }
}
