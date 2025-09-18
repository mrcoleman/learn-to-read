import { PlayerStats } from '../../src/models/PlayerStats';

describe('PlayerStats', () => {
  it('should be defined', () => {
    expect(PlayerStats).toBeDefined();
  });

  it('should initialize with 0 rounds won', () => {
    const playerStats = new PlayerStats();
    expect(playerStats.roundsWon).toBe(0);
  });
});
