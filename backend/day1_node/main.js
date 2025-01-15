//type :module
//for exporting named exports
// import {a,b,c} from "./mymodule.js"
// console.log(a,b,c);

//for default exp

// import obj from "./mymodule.js"
// console.log(obj);


//type:commonjs

// (function(exports,require,module,__dirname,__filename){
// //module code actually lives here
// });
const a =require("./mymodule2.js")
console.log(a,__dirname,__filename); //it is becus of function






