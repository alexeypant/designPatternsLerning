export interface IMenuItem {
    getName: () => string;
    getDescription: () => string;
    checkVegetarian: () => boolean;
    getPrice: () => number;
}

export class MenuItem implements IMenuItem {
  constructor(private name: string, private description: string, private isVegetarian: boolean, private price: number){
  }
  getName(){
      return this.name;
  }
  getDescription(){
      return this.description;
  }
  checkVegetarian(){
      return this.isVegetarian;
  }
  getPrice(){
      return this.price;
  }
}
