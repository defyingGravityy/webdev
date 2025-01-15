console.log("Harry is a hacker")
console.log("Harrrrry is a hacker")

setTimeout(()=>{
    console.log("I am inside timeout!") //async functions 
},2000)
console.log("the end")

const fn=() => {
  console.log("nothing")
}
const callback=(arg,fn)=>{
    console.log(arg)
    fn()
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("harry",fn);
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
