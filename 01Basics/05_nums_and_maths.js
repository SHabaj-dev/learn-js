const score = 400;

const balance = new Number(300.12345);

/*
console.log(score);
console.log(balance.toFixed(3));*/

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN')) //This will print the number in local format based on the input type


// -------------------------------Maths-----------------------------------------------

/*console.log(Math)
console.log(Math.abs(-20)) //Gives the absolute value of the given number
console.log(Math.round(4.2))*/ //Gives round offed  Value

// console.log(Math.random()) //lies between 0 - 1

//Formula to get random number between a range.

const min = 10
const max = 20


//Remember this method

console.log(Math.floor(Math.random() * (max - min + 1)) + min)