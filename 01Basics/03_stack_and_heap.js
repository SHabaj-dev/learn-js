let userOne = {
    username: "user@google.com",
    upiId: "user@ybl"
}

let userTwo = userOne; //this is the reference to the object

userTwo.username = "someNewUser"
console.log(userOne);