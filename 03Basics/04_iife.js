// Immediately invoke function expressions (IIFE)

//Name IIFE
(function chai() {
    console.log("DB connected")
})();
//Note: use ; to end the IIFE in the end

//invoking the function as usually
// chai()

//Unnamed and parameterised IIFE

((name) => {
    console.log(`${name} Db is connecte`)
})("shabaj")

