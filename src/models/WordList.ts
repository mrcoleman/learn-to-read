export class WordList {
  public words: string[];

  constructor(words: string[]) {
    this.words = words;
  }

  getRandomWords(count: number): string[] {
    const shuffled = this.words.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
