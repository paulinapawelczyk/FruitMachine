class Game {
    constructor(moneyAtstart) {
        this.gameResult = new GameResult();
        this.wallet = new Wallet(moneyAtstart); // money for start

        const btn = document.getElementById('play_start');
        btn.addEventListener('click', this.playGame.bind(this));

        this.fruitsResult = [...document.querySelectorAll('div.fruit')];
        this.inputAmount = document.getElementById('amount');
        this.walletSpan = document.querySelector('.amount_panel span.wallet');
        this.gameResultSpan = document.querySelector('.games .game_result');
        this.gameNumber = document.querySelector('.games .game_number');
        this.gameWins = document.querySelector('.games .game_win');
        this.gameLoses = document.querySelector('.games .game_loss');

        this.init(); // launch each time when user open page

    }

    init(money = this.wallet.getActualValue(), gameResultSpan = "", drawResult = [0, 0, 0], fruits = ['star', 'star', 'star'], bid = 0, wonBid = 0) {
        this.walletSpan.textContent = money;

        if (gameResultSpan) {
            gameResultSpan = `You won ${wonBid} PLN!`;
        } else if (!gameResultSpan && gameResultSpan !== "") {
            gameResultSpan = `You lose ${bid} PLN!`;
        }


        this.gameResultSpan.textContent = gameResultSpan;
        this.gameNumber.textContent = drawResult[0];
        this.gameWins.textContent = drawResult[1];
        this.gameLoses.textContent = drawResult[2];

        this.fruitsResult.forEach((fruit, index) => {
            fruit.style.backgroundImage = `url(img/${fruits[index]}.png)`;
        })

        this.inputAmount.value = "";

    }

    playGame() {
        if (this.inputAmount.value < 1) {
            return alert('Minimum amount should be 1')
        }

        const bid = Math.floor(this.inputAmount.value);

        if (!this.wallet.canPlay(bid)) {
            return alert("You have not enough money. Can't play.")
        }

        this.wallet.updateWallet(bid, "substract");

        this.play = new Play();
        const fruitResult = this.play.getPlayResult();
        const isWin = AppResult.isWin(fruitResult);

        const wonAmount = AppResult.moneyWin(isWin, bid);
        // console.log(wonAmount);


        this.wallet.updateWallet(wonAmount, "add");

        this.gameResult.addGameToResults(isWin, bid);


        this.init(this.wallet.getActualValue(), isWin, this.gameResult.showGamesResults(), fruitResult, bid, wonAmount);
    }
}
