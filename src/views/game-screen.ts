export class GameScreen {
  private element: HTMLElement;
  private wordDisplay: HTMLElement;
  private wordInput: HTMLInputElement;
  private replayAudioButton: HTMLElement;
  private innerScreen: HTMLElement;

  constructor(element: HTMLElement, private onAnswer: (answer: string) => void, private onReplayAudio: () => void) {
    this.element = element;
    this.wordDisplay = this.element.querySelector('#word-display')!;
    this.wordInput = this.element.querySelector('#word-input')!;
    this.replayAudioButton = this.element.querySelector('#replay-audio-button')!;
    this.innerScreen = this.element.querySelector('#inner-screen')!;
    this.wordInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.onAnswer(this.wordInput.value);
        this.wordInput.value = '';
      }
    });
    
    this.replayAudioButton.addEventListener('click', this.onReplayAudio);
  }

  show() {
    this.element.style.display = 'block';
    this.innerScreen.style.display = 'block';
    console.log('Game screen shown');
  }

  hide() {
    this.element.style.display = 'none';
  }

  setWord(word: string) {
    this.wordDisplay.textContent = '_ '.repeat(word.length);
  }
  
  playHeroAttackAnimation() {
    const heroAnimationElement = this.element.querySelector('#hero-animation')!;
    heroAnimationElement.textContent = 'Hero attacks!';
    setTimeout(() => {
      heroAnimationElement.textContent = '';
    }, 1000);
  }
  
  playMonsterAttackAnimation() {
    const monsterAnimationElement = this.element.querySelector('#monster-animation')!;
    monsterAnimationElement.textContent = 'Monster attacks!';
    setTimeout(() => {
      monsterAnimationElement.textContent = '';
    }, 1000);
  }
}
