class GameResult {
    constructor() {
        //each game add to array
        this.gameResults = [];
    }

    addGameToResults(win, bidValue) {
        let gameResult = {
            win: win,
            bidValue: bidValue
        };
        this.gameResults.push(gameResult);

    }
    showGamesResults() {
        let gamesNumber = this.gameResults.length;

        let gamesWins = this.gameResults.filter(gameResult => gameResult.win).length;

        let gamesLoses = this.gameResults.filter(gameResult => !gameResult.win).length;

        return [gamesNumber, gamesWins, gamesLoses];

    }

}
