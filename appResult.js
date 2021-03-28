class AppResult {
    // available only from class level
    static isWin(playResult) {
        if ((playResult[0] === playResult[1] && playResult[1] === playResult[2]) || (playResult[0] !== playResult[1] && playResult[1] !== playResult[2] && playResult[0] !== playResult[2])) {
            return true;
        } else {
            return false;
        }
    }

    static moneyWin(gameResult, bidMoney) {
        if (gameResult) {
            return 3 * bidMoney;
        } else {
            return 0;
        }
    }
}

AppResult.moneyWin(true, 5);

