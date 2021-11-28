import { makeAutoObservable } from 'mobx';

export class CardTabsStore {
    public step: number;

    constructor(defaultStep?: number) {
        this.step = defaultStep || 0;
        makeAutoObservable(this);
    }

    public goToStep(index: number): void {
        this.step = index;
    }

    public nextStep(): void {
        this.step++;
    }

    public previousStep(): void {
        this.step--;
    }
}
