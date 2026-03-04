interface Adder {
    //Method to take a number and add to something
    add(nr: number): void;
    //Method to return the current total
    getSum(): number;
}

class SimpleAdder implements Adder {
    protected sum: number = 0;

    add(nr: number): void {
        this.sum += nr;
    }

    getSum(): number {
        return this.sum;
    }
}

class CharCounter {
    //The constructor receives an Adder object and stores it inside the class
    constructor(protected adder: Adder) { }
    //Count how many characters
    addWordCharacters(word: string): void {
        this.adder.add(word.length);
    }
    //Return total character count
    getCharacterCount() {
        return this.adder.getSum();
    }
}

//instances
//instance 01
let adder1: Adder = new SimpleAdder();
adder1.add(3);
adder1.add(7);
console.log(adder1.getSum());

//instance 02
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Raimond");
counter1.addWordCharacters("Apple");
console.log(counter1.getCharacterCount());