let a=6;

function Factorial(number){
    let arr=Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
//using for loop
function Facfor(number){
    let fac=1;
    for (let index = 1; index <= number; index++) {
       fac=fac*index;       
    }
    return fac;
}

console.log(Facfor(a))
