import { Father } from '../Father';
import { IWife } from '../interfaces/IWife';
import { MerchantDaughter } from '../wifes/MerchantDaughter';


export class ElderSon extends Father {
  selectWife(): IWife {
    return new MerchantDaughter();
  }
}