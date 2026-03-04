var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
var CharCounter = /** @class */ (function () {
    //The constructor receives an Adder object and stores it inside the class
    function CharCounter(adder) {
        this.adder = adder;
    }
    //Count how many characters
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    //Return total character count
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
//instances
//instance 01
var adder1 = new SimpleAdder();
adder1.add(3);
adder1.add(7);
console.log(adder1.getSum());
//instance 02
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Raimond");
console.log(counter1.getCharacterCount());
