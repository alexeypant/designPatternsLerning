import * as assert from "assert";
import { ICarsFactory } from './ICarsFactory';
import { ToyotaFactory } from './ToyotaFactory';
import { FordFactory } from './FordFactory';
import { ECarType } from './ECarType';
import { ECarProducer } from './ECarProducer';

describe('abstract factory', () => {
  it('should create cars of different types and different producers', () => {
    const factoryOne: ICarsFactory = new ToyotaFactory();
    const factoryTwo: ICarsFactory = new FordFactory();
    const fordCoupe = factoryOne.createCoupe();
    const toyotaSedan = factoryTwo.createSedan();

    assert.strictEqual(fordCoupe.type, ECarType.coupe);
    assert.strictEqual(fordCoupe.producer, ECarProducer.toyota);
    assert.strictEqual(toyotaSedan.type, ECarType.sedan);
    assert.strictEqual(toyotaSedan.producer, ECarProducer.ford);
  });
});
