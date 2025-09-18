export class GameRound {
  public words: string[];
  public currentWordIndex: number;
  public correctGuesses: number;
  public incorrectGuesses: number;

  constructor(words: string[]) {
    this.words = words;
    this.currentWordIndex = 0;
    this.correctGuesses = 0;
    this.incorrectGuesses = 0;
  }
}
