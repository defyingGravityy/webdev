let random = Math.random()

let a = prompt("Enter the first number")
let c = prompt("Enter operation")
let b = prompt("Enter the second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random > 0.1)
{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}