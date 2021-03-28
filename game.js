class Game {
    constructor(moneyAtstart) {
        this.gameResult = new GameResult();
        this.wallet = new Wallet(moneyAtstart); // money for start

        const button = document.getElementById('play_start');
        button.addEventListener('click', this.playGame());

        this.fruitsResult = [...document.querySelectorAll('div.fruit')];
        this.inputAmount = document.getElementById('amount');
        this.walletSpan = document.querySelector('.amount_panel span.wallet');
        this.gameResult = document.querySelector('.games .game_result');
        this.gameNumber = document.querySelector('.games .game_number');
        this.gameWins = document.querySelector('.games .game_win');
        this.gameLoses = document.querySelector('.games .game_loss');

        this.init();

    }

    init(money = this.wallet.getActualValue(), gameResult = "", result = [0, 0, 0], fruits = ['star', 'star', 'star'], bid = 0, wonBid = 0) {
        this.walletSpan.textContent = money;

        if (gameResult) {
            gameResult = `You won ${wonBid} PLN!`;
        } else if (!gameResult && gameResult != "") {
            gameResult = `You lose ${bid} PLN!`;
        }


        this.gameResult.textContent = gameResult;
        this.gameNumber.textContent = result[0];
        this.gameWins.textContent = result[1];
        this.gameLoses.textContent = result[2];

        this.fruitsResult.forEach((fruit, index) => {
            fruit.style.backgroundImage = `url(img/${fruits[index]}.png)`;
        })

    }

    playGame() {

    }
}
