import {Duck} from "./Duck";
import {FlyNoWay} from "../../dist/FlyNoWay";
import {FlyWithWings} from "../../dist/FlyWithWings";


export class GreyNeckDuck extends Duck {
  constructor(){
      super();
      this.flyBehaviour = new FlyWithWings();
  }
}