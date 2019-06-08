import {FlyBehaviour} from "../../dist/FlyBehaviour";

export class Duck {

    public flyBehaviour: FlyBehaviour;

    performFly (){
        this.flyBehaviour.fly();
    }

    setFlyBehaviour(newFlyBehaviour: FlyBehaviour){
        this.flyBehaviour = newFlyBehaviour;
    }

}