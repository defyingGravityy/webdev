class User{
    constructor(name){
        this.name=name;
    }

    get name(){
        return this.name;
    }

    set name(value){
        if(value.length<4){
            console.log("Name is short");
            return;
        }
        this.name=value;
    }
}

let user =new User("John");
console.log(user.name); //john

user.name=" " //name is short
