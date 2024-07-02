let random = Math.random()
console.log(random)
let a = prompt("enter first number")
let b = prompt("enter operation")
let c = prompt("enter second number")

let obj ={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
