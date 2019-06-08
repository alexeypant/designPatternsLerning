import {Duck} from "./Duck";
import {FlyNoWay} from "../../dist/FlyNoWay";


export class RubberDuck extends Duck {
  constructor(){
      super();
      this.flyBehaviour = new FlyNoWay();
  }
}