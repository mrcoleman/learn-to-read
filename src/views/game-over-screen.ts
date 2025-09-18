export class GameOverScreen {
  private element: HTMLElement;
  private roundsWonElement: HTMLElement;
  private onRestart: () => void;

  constructor(element: HTMLElement, onRestart: () => void) {
    this.element = element;
    this.onRestart = onRestart;
    this.roundsWonElement = this.element.querySelector('#game-over-rounds-won')!;
    this.element.querySelector('#restart-button')!.addEventListener('click', this.onRestart);
  }

  show(roundsWon: number) {
    this.roundsWonElement.textContent = roundsWon.toString();
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}
