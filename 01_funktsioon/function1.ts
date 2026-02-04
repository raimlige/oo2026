//Function 01
function sayHello(){
    return "Hello world!"
};

let message = sayHello();
console.log(message);

//Function 02
function multiply(a:number, b:number){
    return a*b;
};

let calculation = multiply(5, 3);
console.log(calculation);

//Function 03 - BMI calculation (BMI = kg/m2) !!!cm to m
function BMI_calc(cm:number, kg:number):number {
    let meter: number = cm/100;
    return (kg/(meter*meter));
};

//Function 03-1 - using certain nr as input
console.log(BMI_calc(175, 70));

//Function 03-2 - using array as weight input
let weights: number[]=[80, 90, 100, 110, 115];
for(let weight of weights){
    console.log(BMI_calc(180,weight));
};

//Function 03-3 - saving BMI values as an array (using weights array)
//Map runs the given function once for each value in the array
//For each weight, BMI is called
//The returned BMI values are collected into a new array
let bmivalue: number [] = weights.map(weight => BMI_calc(180, weight));
console.log(bmivalue);

//Function 04 - Different function for BMI (Alternative formula for BMI)
function BMI_calc_2 (cm:number, kg:number):number {
    let meter: number = cm/100;
    return 1.3*kg/Math.pow(meter,2.5);
};

//Function 04-1 - saving BMI values as an array (using weights array) same as F03-3
let bmivalue2: number [] = weights.map(weight => BMI_calc_2(180, weight));
console.log(bmivalue2);

//Function 03/04-2 height incrementation
let results: number [][]=[];

for(let height=150; height<190; height+=2){
    results.push([
        height,
        BMI_calc(height, 90),
        BMI_calc_2(height, 90)
    ]);
};
console.log(results);

//Function 05 - area of the circle (Pi*r^2) r in cm (also rounded up)
function circle_area (radius:number):number {
    const pi: number = 3.1415;
    let area = pi*Math.pow(radius, 2);
    let roundArea: number = Math.round(area*100/100);
    return roundArea
};

//Function 05-1 - area of the circle print
let area_result = circle_area(5);
console.log(area_result + " cm");