console.log("hey shivam, You are good");
console.log("hey bro, You are good");

function nice(name) {
    console.log("hey " + name +", You are good");
}

nice("aditya")


// c is optional
function sum(a,b,c=3){
    return a + b + c;
}

result = sum(2,5);
console.log("The sum of 2 and 5 is " + result)
result1 = sum(2,5,1);
console.log("The sum of 2,5 and 1 is " + result1) 


const func1 = (x)=>{
    console.log("I am a arrow function " + x)
}

func1(12);
func1(14);
func1(56);