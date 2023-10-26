//data is calculated in millisecond

let myData = new Date()
// console.log(typeof myData)
/*
console.log("toString Method -> " + myData.toString())
console.log("toDateString -> " + myData.toDateString())
console.log("toISOString ->" + myData.toISOString())
console.log("toLocaleDateString -> " + myData.toLocaleDateString())
console.log("toLocaleString -> " + myData.toLocaleString())
console.log("toLocaleTimeString -> " + myData.toLocaleTimeString())*/

//Creating my Specific data
//Months stars from 0 means 0 is jan 1 is feb and so on.
let myCreatedDate = new Date(2023, 5, 1)

console.log(myCreatedDate.toDateString())
