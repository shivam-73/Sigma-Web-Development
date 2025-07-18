let a = prompt("Enter first number: ");

let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is expected error");
}

let sum = parseInt(a) + parseInt(b);
function main(){
    let x = 1;
    try{
        console.log("The sum is ",sum);
        return true;
    }catch(error){
        console.log("error aagya bhai");
        return false;
    }
    // finally{
        console.log("it will always run even the try or catch return from function")
    // }
}

let c = main()