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
                if (type == "add") {
                    return _money + value;
                }
                else if (type == "substract") {
                    return _money - value;
                } else {
                    throw new Error("Wrong type of values");
                }
            } else {
                console.log(typeof value);
            }
        }
    }
}

const wallet = new Wallet(1000);