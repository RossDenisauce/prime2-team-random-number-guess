const Random = require('./random');
const random = new Random(100);
const randomIn = random.generator();
console.log(randomIn);

class Compare{
    constructor(guessIn) {
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