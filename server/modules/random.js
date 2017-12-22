class Rando{
    constructor(maxIn) {
        this.max = maxIn;
    }
    generator() {
        let result = Math.floor(Math.random() * this.max);
        console.log(this.max, result);
        return result;
    }
}


module.exports = Rando;