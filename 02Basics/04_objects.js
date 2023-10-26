//singleton

const facebookUser = new Object() //this will create a empty singleton Object

facebookUser.id = "123abc"
facebookUser.name = "Some Name"
facebookUser.isLoggedIn = false

// console.log(facebookUser)

//Creating Objects of Object
const instagramUser = {
    email: "someUser@email.com",
    fullName: {
        firstName: "Some",
        lastName: "Name"
    }
}


// console.log(instagramUser.fullName)

//Concatenating Two different objects into one
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)



//Destructuring
const course = {
    courseName: "JavaScript Learning",
    price: "999",
    courseInstructor: "Hitesh Chaudhary"
}

const {courseInstructor} = course

console.log(courseInstructor)