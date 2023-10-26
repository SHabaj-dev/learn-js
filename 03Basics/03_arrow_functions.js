const users = {
    // userName: "shabaj",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`)
    }
}

// users.welcomeMessage()

function chai() {
    console.log(this) //we cant use this in functions
}

// chai()

//Creating an arrow function
const code = () => {
    console.log(this) //we can use this in arrow functions
}

// code()

//Implicit return arrow function

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(5, 10))
 