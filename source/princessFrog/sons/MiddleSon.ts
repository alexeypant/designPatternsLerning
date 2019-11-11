import { Father } from '../Father';
import { IWife } from '../interfaces/IWife';
import { BoyarDaughter } from '../wifes/BoyarDaughter';

export class MiddleSon extends Father {
  selectWife(): IWife {
    return new BoyarDaughter();
  }
}