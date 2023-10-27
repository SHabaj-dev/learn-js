/*
const arr = ["java", "android", "kotlin", "javascript"]

arr.forEach((item) => {
    console.log(item)
})*/

//Getting return values from foreach method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const retValue = myNums.filter((num) => {
    return num > 4
})
console.log(retValue)
