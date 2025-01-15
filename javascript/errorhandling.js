let a=prompt("Enter first number")
let b=prompt("Enter Second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum =parseInt(a)+parseInt(b)


try {
    console.log("The sum is ",sum*x); 
} catch (error) {
    console.log("Error aa gaya bhai!");
    }
    finally{
        console.log("Files nd DB connections are being closed!");   
    }




