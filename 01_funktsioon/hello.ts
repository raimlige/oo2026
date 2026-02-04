//let message: string = "Hello world";
//console.log(message);

let firstname: string = "Raimond";
let age: number = 15;
console.log("My name is " + firstname + " and my age is " + age);

if (age < 7){
    console.log("Your ticket is free");
} else {
    console.log("Buy a ticket")
    if (age < 16){
        console.log("Buy a child ticket");
    } else {
        console.log("Buy a full ticket")
    }

};

let symbol: string[] = [];  //empty array
for (let nr = 0; nr < age; nr++){
    symbol.push("*");
};

console.log(symbol);
console.log(symbol.join(""));


