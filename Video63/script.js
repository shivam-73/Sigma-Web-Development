// let obj = {
//     a:1,
//     b:"harry"
// }

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }
    
    eats(){
        console.log("kha rha hu")
    }
    jumps(){
        console.log("Kud rha hai")
    }
}

class Lion extends Animal{
    constructor(name){
        super();

    }
}
let a = new Animal("bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l)
