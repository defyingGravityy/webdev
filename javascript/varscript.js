let a = 5;
let b = 6;
var c = "harry"
console.log(a + b)
console.log(typeof (a), typeof (b), typeof (c))

// js is case sensitive language and var name cant start with digit tho it can contain the same

// assignment to const variable is not allowed
//var is global scope and let is block scope
{
    let a=66;
    console.log(a)
}
console.log(a)
{
    let b=66;
    // console.log(b)
}
console.log(b)