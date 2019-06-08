import {FlyBehaviour} from "../../dist/FlyBehaviour";

export class FlyWithWings implements FlyBehaviour {
  public fly(): void {
      console.log('I am flying');
  }
}