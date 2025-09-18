export class GameOverScreen {
  private element: HTMLElement;
  private roundsWonElement: HTMLElement;
  private onRestart: () => void;
  private innerScreen: HTMLElement;

  constructor(element: HTMLElement, onRestart: () => void) {
    this.element = element;
    this.onRestart = onRestart;
    this.roundsWonElement = this.element.querySelector('#game-over-rounds-won')!;
    this.innerScreen = this.element.querySelector('#inner-game-over-screen')!;
    this.element.querySelector('#restart-button')!.addEventListener('click', this.onRestart);
  }

  show(roundsWon: number) {
    this.roundsWonElement.textContent = roundsWon.toString();
    this.innerScreen.style.display = 'block';
    this.element.style.display = 'block';
  }

  hide() {
    this.innerScreen.style.display = 'block';
    this.element.style.display = 'none';
  }
}
