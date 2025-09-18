export class GameScreen {
  private element: HTMLElement;
  private wordDisplay: HTMLElement;
  private wordInput: HTMLInputElement;
  private replayAudioButton: HTMLElement;
  private innerScreen: HTMLElement;
  private heroAnimationElement: HTMLElement;
  private monsterAnimationElement: HTMLElement;
  private attackButton: HTMLElement;

  constructor(element: HTMLElement, private onAnswer: (answer: string) => void, private onReplayAudio: () => void) {
    this.element = element;
    this.wordDisplay = this.element.querySelector('#word-display')!;
    this.wordInput = this.element.querySelector('#word-input')!;
    this.replayAudioButton = this.element.querySelector('#replay-audio-button')!;
    this.innerScreen = this.element.querySelector('#inner-screen')!;
    this.heroAnimationElement = this.element.querySelector('#hero-animation')!;
    this.monsterAnimationElement = this.element.querySelector('#monster-animation')!;
    this.attackButton = this.element.querySelector('#attack-button')!;
    this.wordInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        this.onAnswer(this.wordInput.value);
        this.wordInput.value = '';
      }
    });
    
    this.replayAudioButton.addEventListener('click', this.onReplayAudio);
    this.attackButton.addEventListener('click', () => {
      this.onAnswer(this.wordInput.value);
      this.wordInput.value = '';
    });
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
    
    this.heroAnimationElement.style.display = 'block';
    setTimeout(() => {
      this.heroAnimationElement.style.display = 'none';
    }, 1000);
  }
  
  playMonsterAttackAnimation() {
    
    this.monsterAnimationElement.style.display = 'block';
    setTimeout(() => {
      this.monsterAnimationElement.style.display = 'none';
    }, 1000);
  }
}
