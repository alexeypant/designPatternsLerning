import { IWife } from '../interfaces/IWife';

export class MerchantDaughter implements IWife {
  constructor(){
  }

  makeBread(){
    return 'merchant daughter made bread'
  }

  makeTShort(){
    return 'merchant daughter made T-Short'
  }

  dance(){
    return 'merchant daughter dance';
  }
}