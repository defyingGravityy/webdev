// let obj={
//     a: 1,
//     b:"harry"
// }

// console.log(obj);

// let animal ={
//     eats:true
// };
// let rabbit ={
//     jumps:true
// };

// rabbit.__proto__=animal; //sets rabbit.[[prototype]]=animal

class Animal {
    constructor(name){
        this.name=name
        console.log("object is created...");
    }

    eats(){
        console.log("kha raha hun");        
    }
    jumps(){
        console.log("kud raha hun");        
    }
}
class Lion extends Animal {
    constructor(name){
        super(name)
        this.name=name
        console.log("object is created and he is lion...");
    }
    roars(){
        "Ghur rha hun"
    }
}
let a =new Animal("Bunny");
let b=new Lion("shera");
console.log(b);

