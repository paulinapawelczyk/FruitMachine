class Game {
    constructor() {
        this.gameResult = new GameResult();
        this.wallet = new Wallet(1000); // money for start

        const button = document.getElementById('play_start');
        button.addEventListener('click', this.playGame());

        this.fruitsResult = document.querySelectorAll('div.fruit');
        this.inputAmount = document.getElementById('amount');
        this.wallet = document.querySelector('.amount_panel span.wallet');
        this.gameResult = document.querySelector('.game .game_result');
        this.gameNumber = document.querySelector('.game .game_number');
        this.gameWins = document.querySelector('.game .game_win');
        this.gameLoses = document.querySelector('.game .game_loss');


    }

    init() {

    }

    playGame() {

    }
}


const game = new Game();