let arr=[1,3,5,7,11,13]

let newArr =arr.map((e)=>{
    return e**2
})
console.log(newArr)

const greatertThanseven=(e)=>{
    if(e>7)
    {
    return true;
    }
    return false;

}
console.log(arr.filter(greatertThanseven)) //only >7 vale element will be printed

let arr2=[1,2,3,4,5,6]
const red= (a,b) =>{
    return a*b
}

console.log(arr2.reduce(red)) //this will apply function on all elements of arr2 and willgive final value 