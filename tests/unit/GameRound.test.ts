import { GameRound } from '../../src/models/GameRound';

describe('GameRound', () => {
  it('should be defined', () => {
    expect(GameRound).toBeDefined();
  });

  it('should initialize with 6 words', () => {
    const words = ['a', 'b', 'c', 'd', 'e', 'f'];
    const gameRound = new GameRound(words);
    expect(gameRound.words).toEqual(words);
    expect(gameRound.currentWordIndex).toBe(0);
    expect(gameRound.correctGuesses).toBe(0);
    expect(gameRound.incorrectGuesses).toBe(0);
  });
});
