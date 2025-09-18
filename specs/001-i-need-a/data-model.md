# Data Model for Simple Web Game for Reading

## Entities

### GameRound

Represents a single instance of the game.

**Fields**:
- `words`: `string[]` - An array of 6 words for the current round.
- `currentWordIndex`: `number` - The index of the current word in the `words` array.
- `correctGuesses`: `number` - The number of correct guesses in the current round.
- `incorrectGuesses`: `number` - The number of incorrect guesses in the current round.

### PlayerStats

Represents the player's progress.

**Fields**:
- `roundsWon`: `number` - The total number of rounds won by the player.

### WordList

A collection of words for the game.

**Fields**:
- `words`: `string[]` - An array of simple 2 and 3 letter words.
