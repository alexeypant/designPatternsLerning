export interface IChocolateBoiler {
    fill: () => void;
    drain: () => void;
    boil: () => void;
    isEmpty: () => boolean;
    isBoiled: () => boolean;
}

export class ChocolateBoiler implements IChocolateBoiler{
    private empty: boolean = true;
    private boiled: boolean = false;
    private static instance: IChocolateBoiler | null = null;

    private constructor (){
      console.log('constructoring the ChocolateBoiler');
    }

    static getInstance(): IChocolateBoiler {
        if (!this.instance) {
            this.instance = new ChocolateBoiler();
        }
        console.log('providing instance of the ChocolateBoiler');
        return this.instance;
    }

    fill(): void {
        if(this.empty){
          console.log('filling the boiler');
          this.empty = false;
          this.boiled = false;
        }
    }

    drain():void {
        if(!this.empty && this.boiled) {
            console.log('draining the bolier');
            this.empty = true;
        }
    }

    boil(): void {
        if(!this.empty && !this.boiled) {
            console.log('boiling the mixture');
            this.boiled = true;
        }
    }

    isEmpty():boolean {
        return this.empty;
    }

    isBoiled():boolean {
        return this.boiled;
    }

}