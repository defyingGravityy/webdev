const fs =require("fs")
//const fs =require("fs/promises")

console.log("starting")
// fs.writeFileSync("harry.txt","harry is good boy")
fs.writeFile("harry2.txt","harry is really a very goodboy",()=>{
    console.log("done");
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString());    
    })
})

fs.appendFile("harry.txt","harryrobo",(e,d)=>{
    console.log(d);   
})

console.log("ending");

