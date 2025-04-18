console.log("Hello from backend")

// const add = require("./math")
// console.log(add(5,5))

const {addition, subtract} = require("./math")

console.log("ADD" , addition(22 , 25))
console.log("Minus" , subtract(25, 18))