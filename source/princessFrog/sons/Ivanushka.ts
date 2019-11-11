import { Father } from '../Father';
import { IWife } from '../interfaces/IWife';
import { PrincessFrog } from '../wifes/PrincessFrog';

export class Ivanushka extends Father {
  selectWife(): IWife {
    return new PrincessFrog();
  }
}