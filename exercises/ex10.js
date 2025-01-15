let rand=Math.random()
let first,second,third;
if(rand<0.33){
    first="crazy"
    console.log(first);
}
else if(rand<0.66 && rand>=0.33)
{
    first="Amazing"
    console.log(first);
}
else{
    first="Fire"
    console.log(first);
}
//lets generate the second word
if(rand<0.33){
    second="Engine"
    console.log(second);
}
else if(rand<0.66 && rand>=0.33)
{
    second="Foods"
    console.log(second);
}
else{
    second="Garments"
    console.log(second);
}
//lets generate the second word
if(rand<0.33){
    third="Bros"
    console.log(third);
}
else if(rand<0.66 && rand>=0.33)
{
    third="Limited"
    console.log(third);
}
else{
    third="Hub"
    console.log(third);
}