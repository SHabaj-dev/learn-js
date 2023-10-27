const myNums = [1, 2, 3, 4]

/*
const initialValue = 3;

const myTotal = myNums.reduce((acc, currentValue) => {
    console.log(`acc: ${acc} and currentVal : ${currentValue}`)
    return acc + currentValue
}, initialValue)

console.log(myTotal)*/

const shoppingCart = [
    {
        itemName: "js Course",
        price: 999
    },
    {
        itemName: "Android dev Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 1999
    }
]

const subTotal = shoppingCart.reduce((acc, item) => {
    return item.price + acc
}, 0)

console.log(subTotal)
