async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000)
    })
}
function sum(a,b,c)
{
    return a+b+c
}
(async function main(){
    // let a= await sleep()
    // console.log(a);
    
    // let b= await sleep()
    // console.log(b);

    // let [x,y, ...rest]=[1,5,7,8,9,10]
    // console.log(x,y,rest);

    // let obj ={
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    
    // let {a,b}=obj
    // console.log(a,b);

    let arr =[1,4,6]
    console.log(sum(...arr));
    const obj={...arr};//{o/p ==>0:1,1:7,2:11 }

    
    
    
    
})() //this is iife imediately invoked function 
