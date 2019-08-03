export interface IScreen {
    up: () => void;
    down: () => void;
}

export class Screen implements IScreen {

    up(): void {
      console.log('moving screen up');
    }

    down(): void {
      console.log('moving screen down');
    }
}
