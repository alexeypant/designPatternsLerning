import { IWife } from '../interfaces/IWife';

export class BoyarDaughter implements IWife {
  constructor(){
  }

  makeBread(){
    return 'boyar daughter made bread'
  }

  makeTShort(){
    return 'boyar daughter made T-Short'
  }

  dance(){
    return 'boyar daughter dance';
  }
}