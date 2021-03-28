// keep state of money in application
class Wallet {
    constructor(money) {
        let _money = money;

        this.getActualValue = () => _money;

        this.canPlay = moneyInput => {
            if (_money >= moneyInput) {
                return true;
            } else {
                return false;
            }
        }

        this.updateWallet = (value, typeOfAction = "add") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (typeOfAction == "add") {
                    return _money += value;
                }
                else if (typeOfAction == "substract") {
                    return _money -= value;
                } else {
                    throw new Error("Wrong type of action");
                }
            } else {
                console.log(typeof value);
                throw new Error("Invalid value of input")
            }
        }
    }
}

