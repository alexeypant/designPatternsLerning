import { ISedan } from './ISedan';
import { ICoupe } from './ICoupe';

export interface ICarsFactory {
  createSedan: () => ISedan;
  createCoupe: () => ICoupe;
}
