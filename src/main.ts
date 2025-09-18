import { GameService } from './services/GameService';
import { StartScreen } from './views/start-screen';
import { GameScreen } from './views/game-screen';
import { SuccessScreen } from './views/success-screen';
import { GameOverScreen } from './views/game-over-screen';
import startScreenHtml from './views/start-screen.html';
import gameScreenHtml from './views/game-screen.html';
import successScreenHtml from './views/success-screen.html';
import gameOverScreenHtml from './views/game-over-screen.html';
import {download, predict} from '@diffusionstudio/vits-web';

export class Game {
    private gameService = new GameService();
    private startScreen: StartScreen;
    private gameScreen: GameScreen;
    private successScreen: SuccessScreen;
    private gameOverScreen: GameOverScreen;
    public currentScreen: string;
    private audio: HTMLAudioElement;

    constructor() {
        document.getElementById('start-screen')!.innerHTML = startScreenHtml;
        document.getElementById('game-screen')!.innerHTML = gameScreenHtml;
        document.getElementById('success-screen')!.innerHTML = successScreenHtml;
        document.getElementById('game-over-screen')!.innerHTML = gameOverScreenHtml;

        this.startScreen = new StartScreen(document.getElementById('start-screen')!, this.startGame.bind(this));
        this.gameScreen = new GameScreen(document.getElementById('game-screen')!, this.submitAnswer.bind(this), this.replayAudio.bind(this));
        this.successScreen = new SuccessScreen(document.getElementById('success-screen')!, this.nextRound.bind(this));
        this.gameOverScreen = new GameOverScreen(document.getElementById('game-over-screen')!, this.restartGame.bind(this));
        this.currentScreen = 'start-screen';
        this.audio = new Audio();
    }

    startGame() {
        this.startScreen.hide();
        this.gameService.startNewRound();
        const currentWord = this.gameService.currentRound!.words[this.gameService.currentRound!.currentWordIndex];
        this.gameScreen.setWord(currentWord);
        this.playAudio(currentWord);
        this.gameScreen.show();
        this.currentScreen = 'game-screen';
    }

    async submitAnswer(answer: string) {
        const correct = this.gameService.submitAnswer(answer);
        if (correct) {
            this.gameScreen.playHeroAttackAnimation();
        } else {
            this.gameScreen.playMonsterAttackAnimation();
        }

        if (this.gameService.isRoundOver()) {
            if (this.gameService.didPlayerWin()) {
                this.gameScreen.hide();
                this.successScreen.show(this.gameService.playerStats.roundsWon);
                this.currentScreen = 'success-screen';
            } else {
                this.gameScreen.hide();
                this.gameOverScreen.show(this.gameService.playerStats.roundsWon);
                this.currentScreen = 'game-over-screen';
            }
        } else {
            const nextWord = this.gameService.currentRound!.words[this.gameService.currentRound!.currentWordIndex];
            this.gameScreen.setWord(nextWord);
            this.audio.src = URL.createObjectURL(await predict({
                text: nextWord,
                voiceId: 'en_US-hfc_female-medium',
            }));
            this.playAudio(nextWord);
        }
    }

    replayAudio() {
        const currentWord = this.gameService.currentRound!.words[this.gameService.currentRound!.currentWordIndex];
        this.playAudio(currentWord);
    }

    playAudio(word: string) {
        // Use a text-to-speech API or pre-recorded audio files
        console.log(`Playing audio for: ${word}`);
        this.audio.play();
    }

    nextRound() {
        this.successScreen.hide();
        this.gameService.nextRound();
        const nextWord = this.gameService.currentRound!.words[this.gameService.currentRound!.currentWordIndex];
        this.gameScreen.setWord(nextWord);
        this.playAudio(nextWord);
        this.gameScreen.show();
        this.currentScreen = 'game-screen';
    }

    restartGame() {
        this.gameOverScreen.hide();
        this.gameService.restartGame();
        const nextWord = this.gameService.currentRound!.words[this.gameService.currentRound!.currentWordIndex];
        this.gameScreen.setWord(nextWord);
        this.playAudio(nextWord);
        this.gameScreen.show();
        this.currentScreen = 'game-screen';
    }
}

new Game();

download('en_US-lessac-medium', (progress) => {
    console.log(`Downloading ${progress.url} - ${Math.round(progress.loaded * 100 / progress.total)}%`);
});