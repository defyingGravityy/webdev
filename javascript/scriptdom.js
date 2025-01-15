console.log("Hello world")
document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children


// let bhupendrajogis=document.getElementsByClassName("box")
// console.log(bhupendrajogis)

// bhupendrajogis[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"
//it'll select first box of class box i.e. element

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})//becuz queryseleforall returns nodelist in order to style elements u have to iterate through it

document.querySelector("body").contains(document.querySelector(".container"));