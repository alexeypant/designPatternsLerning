import { IWifeSelector } from './interfaces/IWifeSelector';
import { IWife } from './interfaces/IWife';

export class Father implements IWifeSelector {
  constructor(...sons: IWifeSelector[]) {
    this.sons = [...sons];
  }

  // factory method
  selectWife(): IWife {
    return {
      makeBread: () => '',
      makeTShort: () => '',
      dance: () => '',
    }
  };

  private daughtersInLaw: IWife[];
  private sons: IWifeSelector[];

  public askSonsToGetMarried(): void {
    this.daughtersInLaw = this.sons.map(son => son.selectWife());
  }

  public askToMakeBread(): string[] {
    return this.daughtersInLaw.map(daughterInLaw => daughterInLaw.makeBread());
  }
  public askToMakeTShort(): string[] {
    return this.daughtersInLaw.map(daughterInLaw => daughterInLaw.makeTShort());
  }
  public askToDance(): string[] {
    return this.daughtersInLaw.map(daughterInLaw => daughterInLaw.dance());
  }

}
