//object Literals

const mySymbol = Symbol("key1")

const JsUsers = {
    name: "Shabaj",
    age: 23,
    [mySymbol]: "myKey1", //to add symbol to the object use square brackets show here in example
    location: "Noida",
    email: "shabaj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}
//Ways to access Objects values
console.log(JsUsers.email)
console.log(JsUsers["email"])

//Way to access Symbol from objects
console.log(JsUsers[mySymbol])

//Update the value in an object
JsUsers.name = "Shabaj Ansari"

//When ever we use Object.freeze() then we cant update the value of objects
/*
Object.freeze(JsUsers)
JsUsers.location = "Grater Noida"
console.log(JsUsers)*/

JsUsers.greeting = function () {
    console.log(`Hello ${JsUsers.name}`)
}

JsUsers.greetingTwo = function () {
    console.log(`Hello ${this.name}`)
}

console.log(JsUsers.greetingTwo ())
