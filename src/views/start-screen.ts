export class StartScreen {
  private element: HTMLElement;
  private onPlay: () => void;

  constructor(element: HTMLElement, onPlay: () => void) {
    this.element = element;
    this.onPlay = onPlay;
    this.element.querySelector('#play-button')!.addEventListener('click', this.onPlay);
  }

  show() {
    this.element.style.display = 'block';
  }

  hide() {
    this.element.style.display = 'none';
  }
}
