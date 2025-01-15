// async function getData(){
//     //simulatr getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }
async function getData(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//    let data = await x.json()
    let data = await x.text()

      console.log(data)
      return 455
}
async function main(){
    console.log("Loading modules")
    console.log("Do something else")
    console.log("Load data")
    let data = await getData()
    console.log("data processing")
    console.log("task 2")
}
main()

