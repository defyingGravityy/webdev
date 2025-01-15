import fs from "fs/promises"

let a = await fs.readFile("harry.txt") //module ke andar 
console.log(a.toString());
