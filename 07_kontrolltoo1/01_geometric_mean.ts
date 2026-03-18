//Create a function that multiplies 2 given numbers and takes the square root of the result.

function square_root_single(x: number, y: number): number {
    let result;
    result = Math.sqrt(x * y);
    return result;
}

let square_root1;

square_root1 = square_root_single(10, 20);
console.log(square_root1.toFixed(2));

//There may be more numbers, given as a collection (array?).
//Multiply all the numbers together and take the n-th root (the reciprocal of the exponent), where n is the number of values.

function geometricMean(numbers: number[]): number {
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return Math.pow(product, 1 / numbers.length);
}

let result = geometricMean([10, 20, 30]);
let result1 = geometricMean([10, 20]); //testing to see if it gets the same answer as the first function
console.log(result.toFixed(2));
console.log(result1.toFixed(2));

