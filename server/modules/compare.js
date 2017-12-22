//console.log(randomIn);

class Compare{
    constructor(guessIn, randomIn) {
        this.guess = guessIn;
        this.answer = randomIn;
    }
    comparator() {
        if (this.guess === this.answer) {
            return 'correct';
        } else if (this.guess > this.answer) {
            return 'lower';
        } else {
            return 'higher';
        }
    }
}

module.exports = Compare;