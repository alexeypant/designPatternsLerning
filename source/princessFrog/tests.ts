import * as assert from "assert";
import { Father } from './Father';
import { ElderSon } from './sons/ElderSon';
import { MiddleSon } from './sons/MiddleSon';
import { Ivanushka } from './sons/Ivanushka';


describe('Princess Frog', () => {
  it('should get bread, t-shorts, dance', () => {

    const elderSon = new ElderSon();
    const middleSon = new MiddleSon();
    const ivanushka = new Ivanushka();
    const father = new Father(elderSon, middleSon, ivanushka);
    father.askSonsToGetMarried();
    const breadItems = father.askToMakeBread();
    console.log('bread: ', breadItems);
    assert.strictEqual(breadItems, '');
  });
});

