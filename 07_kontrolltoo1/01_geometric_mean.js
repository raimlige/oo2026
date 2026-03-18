//Create a function that multiplies 2 given numbers and takes the square root of the result.
function square_root_single(x, y) {
    var result;
    result = Math.sqrt(x * y);
    return result;
}
var square_root1;
square_root1 = square_root_single(10, 20);
console.log(square_root1.toFixed(2));
//There may be more numbers, given as a collection (array?).
//Multiply all the numbers together and take the n-th root (the reciprocal of the exponent), where n is the number of values.
function geometricMean(numbers) {
    var product = 1;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        product *= num;
    }
    return Math.pow(product, 1 / numbers.length);
}
var result = geometricMean([10, 20, 30]);
var result1 = geometricMean([10, 20]);
console.log(result.toFixed(2));
console.log(result1.toFixed(2));
