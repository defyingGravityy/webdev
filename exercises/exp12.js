console.log("Hello world")
document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children

//method1
let bx=document.getElementsByClassName("box");
bx[0].style.backgroundColor="green";
bx[1].style.backgroundColor="red";
bx[2].style.backgroundColor="aqua";
bx[3].style.backgroundColor="palevioletred";
bx[4].style.backgroundColor="blue";

//method2
let boxes=document.querySelector(".container").children
function getRandomColor(){
    let val1=Math.ceil(Math.random()*255);
    let val2=Math.ceil(Math.random()*255);
    let val3=Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor();
})
//random num between two num =min+(max-min+1)*Math.random


//another method to generate random clr in hexadecimal
// var randomcolor="#"+Math.floor(Math.random()*16777215).tostring(16);

