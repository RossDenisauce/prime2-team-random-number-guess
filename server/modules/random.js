class Rando{
    constructor(maxIn) {
        this.max = maxIn;
    }
    generator() {
        let result = Math.floor(Math.random() * this.max);
        return result;
    }
}


module.exports = Rando;