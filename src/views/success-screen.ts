export class SuccessScreen {
  private element: HTMLElement;
  private roundsWonElement: HTMLElement;
  private innerScreen: HTMLElement;
  private onNextRound: () => void;

  constructor(element: HTMLElement, onNextRound: () => void) {
    this.element = element;
    this.onNextRound = onNextRound;
    this.roundsWonElement = this.element.querySelector('#rounds-won')!;
    this.element.querySelector('#next-round-button')!.addEventListener('click', this.onNextRound);
    this.innerScreen = this.element.querySelector('#inner-success-screen')!;
  }

  show(roundsWon: number) {
    this.roundsWonElement.textContent = roundsWon.toString();
    this.element.style.display = 'block';
    this.innerScreen.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}
