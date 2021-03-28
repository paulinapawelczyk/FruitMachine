class Play {
    constructor() {
        this.fruitOptions = ["cherry", "lemon", "apple"]

        let _playResult = this.letsPlay();

        this.getPlayResult = () => _playResult;
    }

    letsPlay() {
        let fruits = [];

        for (let i = 0; i < this.fruitOptions.length; i++) {
            const index = Math.floor(Math.random() * this.fruitOptions.length);
            const fruit = this.fruitOptions[index];
            fruits.push(fruit); //add element to results
        }

        return fruits;
    }
}
