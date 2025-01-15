// //write above in console
// document.querySelector(".box").innerHTML
// document.querySelector(".box").innerText
// document.querySelector(".container").outerHTML //inner html +elemnt itself
// document.querySelector(".box").tagName //it tell div or span or...
// document.querySelector(".box").nodeName 

// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style","display:inline")
// document.querySelector(".box").attributes
// document.querySelector(".box").remove("style")
// document.designMode="on"
// document.querySelector(".box").dataset
let div =document.createElement("div")
div.innerHTML="I have been inserted <b> by harry</b>"
div.setAttribute("class","created");
document.querySelector(".container").append(div)







