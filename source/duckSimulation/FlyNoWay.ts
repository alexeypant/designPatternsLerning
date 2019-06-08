import {FlyBehaviour} from "../../dist/FlyBehaviour";

export class FlyNoWay implements FlyBehaviour {
  public fly(): void {
      console.log('sorry, I can not fly');
  }
}