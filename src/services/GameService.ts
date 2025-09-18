import { GameRound } from '../models/GameRound';
import { PlayerStats } from '../models/PlayerStats';
import { WordList } from '../models/WordList';

export class GameService {
  private wordList: WordList;
  public playerStats: PlayerStats;
  public currentRound: GameRound | null = null;

  constructor() {
    const words = ['at','cat','mat','sat','sam','am','cam','tam','tac','mac','dad','had','fad','fat','hat','pat','pal','gal','gap','lap','zap','map','man','jan','jam','ram','ran','van','ban','pan','got','lot','log','dog','cog','cod','cot','tot','tom','mom','wow','how','now','bow','boss','toss','loss','lot','hot','hop','tom','top','pop','pod','tod','rod','rot','not','mud','mug','lug','dug','hug','hum','sum','gum','gus','gull','tug','bug','dug','duck','luck','tuck','tub','cub','cut','nut','hut','cut','but','bud','buzz','bug','pug','pup','cup','cud','pet','met','meg','leg','let','get','bet','beg','peg','pen','set','jet','let','led','jed','bed','ben','ten','jen','ken','wet','net','ned','red','ted','ten','pen','pet','vet','set','sad','tap','net','dot','dog','bag','dig','ram','hug'];
    this.wordList = new WordList(words);
    this.playerStats = new PlayerStats();
  }

  startNewRound() {
    const roundWords = this.wordList.getRandomWords(6);
    this.currentRound = new GameRound(roundWords);
  }

  submitAnswer(answer: string): boolean {
    if (!this.currentRound) {
      return false;
    }

    const currentWord = this.currentRound.words[this.currentRound.currentWordIndex];
    if (answer === currentWord) {
      this.currentRound.correctGuesses++;
      this.currentRound.currentWordIndex++;
      return true;
    } else {
      this.currentRound.incorrectGuesses++;
      this.currentRound.currentWordIndex++;
      return false;
    }
  }

  isRoundOver(): boolean {
    if(this.currentRound!.incorrectGuesses >= 3) {
        return true;
    }
    else if(this.currentRound!.correctGuesses >= 3) {
      return true;
    }
    return false;
  }

  didPlayerWin(): boolean {
    return this.currentRound ? this.currentRound.correctGuesses >= 3 : false;
  }

  nextRound() {
    if(this.didPlayerWin()) {
        this.playerStats.roundsWon++;
    }
    this.startNewRound();
  }

  restartGame() {
    this.playerStats = new PlayerStats();
    this.startNewRound();
  }
}
