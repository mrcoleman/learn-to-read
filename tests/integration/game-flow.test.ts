import { Game } from '../../src/main';

describe('Game Flow', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should start the game', () => {
    game.startGame();
    expect(game.currentScreen).toBe('game-screen');
  });

  it('should win a round', () => {
    game.startGame();
    // simulate 3 correct answers
    game.submitAnswer('correct');
    game.submitAnswer('correct');
    game.submitAnswer('correct');
    expect(game.currentScreen).toBe('success-screen');
  });

  it('should lose a round', () => {
    game.startGame();
    // simulate 3 incorrect answers
    game.submitAnswer('incorrect');
    game.submitAnswer('incorrect');
    game.submitAnswer('incorrect');
    expect(game.currentScreen).toBe('game-over-screen');
  });
});
