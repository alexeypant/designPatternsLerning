import { ICarsFactory } from './ICarsFactory';
import { ISedan } from './ISedan';
import { ICoupe } from './ICoupe';
import { ECarType } from './ECarType';
import { ECarProducer } from './ECarProducer';

export class FordFactory implements ICarsFactory {
  createSedan(): ISedan {
    return {
      type: ECarType.sedan,
      producer: ECarProducer.ford,
    }
  }
  createCoupe(): ICoupe {
    return {
      type: ECarType.coupe,
      producer: ECarProducer.ford,
    }
  }
}
