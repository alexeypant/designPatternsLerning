import { ICarsFactory } from './ICarsFactory';
import { ISedan } from './ISedan';
import { ICoupe } from './ICoupe';
import { ECarType } from './ECarType';
import { ECarProducer } from './ECarProducer';

export class ToyotaFactory implements ICarsFactory {
  createSedan(): ISedan {
    return {
      type: ECarType.sedan,
      producer: ECarProducer.toyota,
    }
  }
  createCoupe(): ICoupe {
    return {
      type: ECarType.coupe,
      producer: ECarProducer.toyota
    }
  }
}
