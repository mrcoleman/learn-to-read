import { WordList } from '../../src/models/WordList';

describe('WordList', () => {
  it('should be defined', () => {
    expect(WordList).toBeDefined();
  });

  it('should initialize with a list of words', () => {
    const words = ['cat', 'dog', 'sun', 'moon'];
    const wordList = new WordList(words);
    expect(wordList.words).toEqual(words);
  });

  it('should return a random set of words', () => {
    const words = ['cat', 'dog', 'sun', 'moon', 'a', 'b', 'c', 'd'];
    const wordList = new WordList(words);
    const randomWords = wordList.getRandomWords(6);
    expect(randomWords.length).toBe(6);
  });
});
