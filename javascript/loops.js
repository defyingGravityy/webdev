console.log("I am in loop tutorial ");
let obj={
    name:"harry",
    role:"programmer",
    company:"CWH"
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element);
    
}
for (const c of "vaishnavi") {
    console.log(c)
}