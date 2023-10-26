//Javascript functions

function sayMyName() {
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("B")
    console.log("A")
    console.log("J")
}

// sayMyName()

function addNumbers(number1, number2) {
    console.log(number1 + number2)
}

// addNumbers("a", 2) //but we need to check this either is given parameters are number or not inside the function.
// addNumbers(3, 4) //This is what we want


//when we never know the number of arguments we are getting for the function then we use this example
//we ust rest(...) operator for that case.
function calculateCartPrice(...num1) {
    return num1;
}

const price = calculateCartPrice(100, 200, 300)
// console.log(price)

//Passing object into the function
const user = {
    userName: "Shabaj",
    price: 200
}

function handleObject(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}

handleObject(user)